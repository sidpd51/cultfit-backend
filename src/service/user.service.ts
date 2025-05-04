import { createUserDto } from "../dto/user.dto";
import { createUser, deleteUser } from "../repositories/user.repository";

export const createUserService = async (user: createUserDto) => {
    try {
        const newUser = await createUser(user);
        console.log("new user service", newUser);
        return newUser;
    } catch (error) {
        throw error
    }
}

export const deleteUserService = async (userId: number) => {
    try {
        await deleteUser(userId);
    } catch (error) {
        throw error
    }
}