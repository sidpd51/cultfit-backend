import { z } from "zod";

const e164PhoneRegex = /^\+[1-9]\d{9,14}$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const createUserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(e164PhoneRegex, "Phone number must be in E.164 format"),
    password: z.string().regex(strongPasswordRegex, "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
});

