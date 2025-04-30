import { NextFunction, Request, Response } from "express";

export const pingHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: "Pong",
    });
}