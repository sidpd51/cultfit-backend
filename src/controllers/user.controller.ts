import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).json({
        message: "get all users controller response",
    });
}

export const createUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.CREATED).json({
        message: "create user controller response",
        data: req.body
    });
}