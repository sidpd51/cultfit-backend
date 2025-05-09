import { UniqueConstraintError, ValidationError } from "sequelize";
import CenterHoliday from "../db/models/center_holiday";
import { createHolidayDto } from "../dto/centerHoliday.dto";
import { BadRequestError, InternalServerError, NotFoundError } from "../utils/errors/app.error";

export const createCenterHoliday = async (holiday: createHolidayDto) => {
    try {
        const newHoliday = await CenterHoliday.create(holiday);
        return newHoliday
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            throw new BadRequestError("A Holiday in same day exists.");
        }
        if (error instanceof ValidationError) {
            const messages = error.errors.map((err) => err.message.split('.')[1]);
            throw new BadRequestError(messages.join(", "));
        }
        throw new InternalServerError("Error creating center holiday");
    }
}

export const destroyCenterHoliday = async (holidayId: number) => {
    try {
        const deletedCenter = await CenterHoliday.destroy({
            where: {
                id: holidayId
            }
        });
        if (!deletedCenter) {
            throw new NotFoundError("Center holiday not found");
        }
    } catch (error) {
        if (error instanceof NotFoundError) {
            throw error;
        }
        throw new InternalServerError("Something went wrong while deleting center holiday");
    }
}


