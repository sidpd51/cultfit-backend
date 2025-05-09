import { z } from "zod";
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const createHoliday = z.object({
    centerId: z.number({ required_error: "CenterId is required" }),
    holidayDate: z.string().refine(dateStr => {
        return dateRegex.test(dateStr) && !isNaN(new Date(dateStr).getTime());
    }, {
        message: "Invalid date format. Expected YYYY-MM-DD"
    }),
    reason: z.string({ required_error: "Reason is required" }).min(1, "Reason should atleast have one character")
})