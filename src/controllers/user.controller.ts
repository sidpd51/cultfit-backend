import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../utils/errors/app.error";

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundError("User not found"); //just for testing
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

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).json({
        message: "update user controller response",
        data: req.body
    });
}