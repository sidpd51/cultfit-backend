import { createHolidayDto } from "../dto/centerHoliday.dto";
import { createCenterHoliday, destroyCenterHoliday } from "../repositories/centerHoliday.repository";

export const createCenterHolidayService = async (holiday: createHolidayDto) => {
    try {
        const newHoliday = await createCenterHoliday(holiday);
        return newHoliday
    } catch (error) {
        throw error
    }
}

export const destroyCenterHolidayService = async (holidayId: number) => {
    try {
        await destroyCenterHoliday(holidayId);
    } catch (error) {
        throw error
    }
}

