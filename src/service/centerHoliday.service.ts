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

export const destroyCenterHolidayService = async (centerId: number) => {
    try {
        await destroyCenterHoliday(centerId);
    } catch (error) {
        throw error
    }
}

