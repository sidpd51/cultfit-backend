import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AnyZodObject } from "zod";

export const validateRequetBody = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (err) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "Invalid request body",
                success: false,
                error: err,
            })
        }
    }
}