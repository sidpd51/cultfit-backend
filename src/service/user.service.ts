import { dbConfig } from "../config";
import { createUserDto, signInDto } from "../dto/user.dto";
import { createUser, destroyUser, getUserByEmail } from "../repositories/user.repository";
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { InternalServerError, UnauthorizedError } from "../utils/errors/app.error";
import bcrypt from 'bcrypt';

export const createUserService = async (user: createUserDto) => {
    try {
        const newUser = await createUser(user);
        return newUser;
    } catch (error) {
        throw error
    }
}

export const destroyUserService = async (userId: number) => {
    try {
        await destroyUser(userId);
    } catch (error) {
        throw error
    }
}

const createToken = async (user: signInDto) => {
    try {
        const token = jwt.sign(user, dbConfig.JWT_KEY, {
            expiresIn: 3306
        });
        return token;
    } catch (error) {
        throw new InternalServerError("Something went wrong while creating auth token");
    }
}

export const verifyToken = async (token: string | undefined) => {
    try {
        if (!token) {
            throw new UnauthorizedError("Missing auth token");
        }
        const response = jwt.verify(token, dbConfig.JWT_KEY)
        return response;
    } catch (error) {
        if (error instanceof JsonWebTokenError) {
            throw new UnauthorizedError(error.message);
        }
    }
}

const checkPassword = async (plainPassword: string, encryptedPassword: string) => {
    try {
        return await bcrypt.compare(plainPassword, encryptedPassword);
    } catch (error) {
        throw new InternalServerError("Something went wrong while checking password");
    }
}

export const signInService = async (payload: signInDto) => {
    try {
        const user = await getUserByEmail(payload.email);
        const hashPassword = user.password;
        const result = await checkPassword(payload.password, hashPassword);
        if (!result) {
            throw new UnauthorizedError("Invalid email or password");
        } else {
            return await createToken(payload);
        }
    } catch (error) {
        throw error;
    }
}

export const isAdminService = async (email: string) => {
    try {
        const user = await getUserByEmail(email);
        if (user?.role === 'admin') {
            return true;
        }
        return false
    } catch (error) {
        throw new InternalServerError("Something went wrong while getting user")
    }
}
