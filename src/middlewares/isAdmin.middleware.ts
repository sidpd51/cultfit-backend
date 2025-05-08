import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { isAdminService } from "../service/user.service";
import { InternalServerError, NotFoundError } from "../utils/errors/app.error";

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const rawEmail = req.headers["x-email"];
        const email = Array.isArray(rawEmail) ? rawEmail[0] : rawEmail;

        const result = await isAdminService(email);
        console.log(result)
        if (result) {
            next()
        } else {
            res.status(StatusCodes.FORBIDDEN).json({
                message: "You are not authorized to access this resource.",
                success: false,
                data: {}
            });
        }

    } catch (error) {
        if (error instanceof InternalServerError) {
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof NotFoundError) {
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}