import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "../config/logger.config";
import { createUserService, destroyUserService, signInService, updateUserService } from "../service/user.service";
import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from "../utils/errors/app.error";

export const getAllUsersHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("get all users controller");
        throw new NotFoundError("User not found"); //just for testing
        res.status(StatusCodes.OK).json({
            message: "get all users controller response",
        });
    } catch (error) {

    }
}

export const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createUserService(req.body);
        res.status(StatusCodes.CREATED).json({
            message: "User created successfully",
            success: true,
            data: user
        });

    } catch (error) {
        if (error instanceof BadRequestError) {
            logger.error(`Error in createCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        };
        if (error instanceof InternalServerError) {
            logger.error(`Error in createUserHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        };
    }
}

export const updateUserHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId: number = Number(req.params.id);
        const updatedUser = await updateUserService(userId, req.body);

        res.status(StatusCodes.OK).json({
            message: "User udpated successfully.",
            success: true,
            data: updatedUser
        });
    } catch (error) {
        if (error instanceof BadRequestError) {
            logger.error(`Error in updateUserHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof InternalServerError) {
            logger.error(`Error in updateUserHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof NotFoundError) {
            logger.error(`Error in updateUserHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }

}

export const destroyUserHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId: number = Number(req.params.id);
        if (!userId) {
            throw new BadRequestError("User id should be a number");
        }
        await destroyUserService(userId);
        res.status(StatusCodes.OK).json({
            message: `User with id ${userId} deleted successfully`,
            success: true,
            data: {}
        });

    } catch (error) {
        if (error instanceof BadRequestError) {
            logger.error(`Error in delete user controller, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof NotFoundError) {
            logger.error(`Error in delete user controller, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}

export const signInHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const token = await signInService(body);
        res.status(StatusCodes.CREATED).json({
            message: "Token created successfully",
            success: true,
            data: {
                token: token
            }
        });

    } catch (error) {
        if (error instanceof UnauthorizedError) {
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