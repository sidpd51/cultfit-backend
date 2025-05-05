import { UniqueConstraintError, ValidationError } from "sequelize";
import Center from "../db/models/center";
import { createCenterDto, udpateCenterDto } from "../dto/center.dto";
import { BadRequestError, InternalServerError, NotFoundError } from "../utils/errors/app.error";

export const createCenter = async (center: createCenterDto) => {
    try {
        const newCenter = await Center.create(center);
        return newCenter;
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            throw new BadRequestError("A center with this name already exists.")
        }
        if (error instanceof ValidationError) {
            const messages = error.errors.map((err) => err.message.split('.')[1]);
            throw new BadRequestError(messages.join(", "));
        }
        throw new InternalServerError("Error creating center");
    }
}

export const destroyCenter = async (centerId: number) => {
    try {

        const deletedCenter = await Center.destroy({
            where: {
                id: centerId
            }
        });
        if (!deletedCenter) {
            throw new NotFoundError("Center not found");
        }
    } catch (error) {
        if (error instanceof NotFoundError) {
            throw error;
        }
        throw new InternalServerError("Something went wrong while deleting center");
    }
}

export const updateCenter = async (centerId: number, payload: udpateCenterDto) => {
    try {
        const updatedCenter = await Center.update(payload, {
            where: {
                id: centerId
            }
        })
        return updatedCenter;
    } catch (error) {
        if (error instanceof ValidationError) {
            const messages = error.errors.map((err) => err.message.split('.')[1]);
            throw new BadRequestError(messages.join(", "));
        }
        throw new InternalServerError("Something went wrong while updating center");
    }
}

export const getCenterById = async (centerId: number) => {
    try {
        const center = await Center.findByPk(centerId);
        if (!center) {
            throw new BadRequestError(`No center with centerId:${centerId} exist`)
        }
        return center;
    } catch (error) {
        if (error instanceof BadRequestError) {
            throw error;
        }
        throw new InternalServerError("Something went wrong while getting center");
    }
}

export const getAllCenters = async () => {
    try {
        const centers = await Center.findAll();
        return centers;
    } catch (error) {
        throw new InternalServerError("Something went wrong while getting centers");
    }
}