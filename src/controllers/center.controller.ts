import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger.config";
import { BadRequestError, InternalServerError, NotFoundError } from "../utils/errors/app.error";
import { createCenterService, destroyCenterService, getCenterByIdService, updateCenterService } from "../service/center.service";
import { StatusCodes } from "http-status-codes";
import { getAllCenters } from "../repositories/center.repository";

export const createCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createCenterService(req.body);
        logger.info("Center created successfully");
        res.status(StatusCodes.CREATED).json({
            message: "Center created successfully",
            success: true,
            data: user
        });

    } catch (error) {
        if (error instanceof InternalServerError) {
            logger.error(`Error in createCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof BadRequestError) {
            logger.error(`Error in createCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}

export const updateCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const centerId: number = Number(req.params.id);
        const center = await updateCenterService(centerId, req.body);
        res.status(StatusCodes.OK).json({
            message: "Center updated successfully",
            success: true,
            data: center
        });
    } catch (error) {
        if (error instanceof BadRequestError) {
            logger.error(`Error in updateCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof InternalServerError) {
            logger.error(`Error in updateCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}

export const destroyCenterHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const centerId = Number(req.params.id);
        if (!centerId) {
            throw new BadRequestError("Center id should be a number");
        }
        await destroyCenterService(centerId);
        res.status(StatusCodes.OK).json({
            message: `Center with id ${centerId} deleted successfully`,
            success: true,
            data: {}
        });

    } catch (error) {
        if (error instanceof InternalServerError) {
            logger.error(`Error in destroyCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof BadRequestError) {
            logger.error(`Error in destroyCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof NotFoundError) {
            logger.error(`Error in destroyCenterHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}

export const getAllCentersHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const centers = await getAllCenters();
        logger.info("Successfully got all the centers");
        res.status(StatusCodes.OK).json({
            message: "Successfully got all the centers",
            success: true,
            data: centers
        });
    } catch (error) {
        if (error instanceof InternalServerError) {
            logger.error(`Error in getAllCentersHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}

export const getCenterByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const centerId: number = Number(req.params.id);
        if (!centerId) {
            throw new BadRequestError("Center id should be a number");
        }
        const center = await getCenterByIdService(centerId);
        logger.info("Successfully got the center");
        res.status(StatusCodes.OK).json({
            message: "Successfully got the center",
            success: true,
            data: center
        });
    } catch (error) {
        if (error instanceof InternalServerError) {
            logger.error(`Error in getCentersByIdHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
        if (error instanceof BadRequestError) {
            logger.error(`Error in getCentersByIdHandler, ${error.message}`);
            res.status(error.statusCode).json({
                message: error.message,
                success: false,
                data: {}
            });
        }
    }
}
