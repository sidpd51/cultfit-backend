import { UniqueConstraintError, ValidationError } from "sequelize";
import CenterHoliday from "../db/models/center_holiday";
import { createHolidayDto } from "../dto/centerHoliday.dto";
import { BadRequestError, InternalServerError } from "../utils/errors/app.error";

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



