import { createHolidayDto } from "../dto/centerHoliday.dto";
import { createCenterHoliday } from "../repositories/centerHoliday.repository";

export const createCenterHolidayService = async(holiday:createHolidayDto)=>{
    try {
        const newHoliday = await createCenterHoliday(holiday);
        return newHoliday
    } catch (error) {
        throw error
    }
}

