import { z } from "zod";

const e164PhoneRegex = /^\+[1-9]\d{9,14}$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const createUserSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }).min(1, "Name should alleast have one character"),
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    phoneNumber: z.string({
        required_error: "Phone is required",
    }).regex(e164PhoneRegex, "Phone number must be in E.164 format"),
    password: z.string({
        required_error: "Password is required",
    }).regex(strongPasswordRegex, "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    role: z.enum(["admin", "user"], {
        required_error: "Role is required",
        invalid_type_error: "Role must be either 'admin' | 'user'",
    })
});

export const updateUserSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }).min(1, "Name should alleast have one character"),
    phoneNumber: z.string({
        required_error: "Phone is required",
    }).regex(e164PhoneRegex, "Phone number must be in E.164 format"),
    password: z.string({
        required_error: "Password is required",
    }).regex(strongPasswordRegex, "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    role: z.enum(["admin", "user"], {
        required_error: "Role is required",
        invalid_type_error: "Role must be either 'admin' | 'user'",
    })
}).partial();