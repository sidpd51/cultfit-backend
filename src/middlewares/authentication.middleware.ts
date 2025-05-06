import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../service/user.service";

export const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];
        if (!token) {
            res.status(401).json({ message: 'Access token missing' });
        }
        await verifyToken(token);
        next();
    } catch (error) {
        console.error('Auth Error:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
}