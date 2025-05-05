import User from "../db/models/user";
import { createUserDto } from "../dto/user.dto";
import { InternalServerError, NotFoundError } from "../utils/errors/app.error";

export const createUser = async (user: createUserDto) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        throw new InternalServerError("Error creating user");
    }
}

export const destroyUser = async (userId: number) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                id: userId
            }
        });
        console.log("deleted user", deletedUser)
        if (!deletedUser) {
            throw new NotFoundError("User not found");
        }
    } catch (error) {
        throw error;
    }
}