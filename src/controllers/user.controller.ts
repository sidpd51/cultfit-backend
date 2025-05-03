import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "../config/logger.config";
import { createUserService } from "../service/user.service";
import { InternalServerError, NotFoundError } from "../utils/errors/app.error";

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    logger.info("get all users controller");
    throw new NotFoundError("User not found"); //just for testing
    res.status(StatusCodes.OK).json({
        message: "get all users controller response",
    });
}

export const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createUserService(req.body);
        console.log("user controller: ", user);
        res.status(StatusCodes.CREATED).json({
            message: "User created successfully",
            success: true,
            data: user
        });

    } catch (error) {
        if (error instanceof InternalServerError) {
            logger.error(`Error in create user controller, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).json({
        message: "update user controller response",
        data: req.body
    });
}