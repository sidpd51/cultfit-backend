import { createUserDto } from "../dto/user.dto";
import { createUser, destroyUser } from "../repositories/user.repository";

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