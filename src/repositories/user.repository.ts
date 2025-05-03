import User from "../db/models/user";
import { createUserDto } from "../dto/user.dto";
import { InternalServerError } from "../utils/errors/app.error";

export const createUser = async(user: createUserDto) => {
    try {
        const newUser = await User.create(user);
        console.log("new user respository", newUser);
        return newUser;
    } catch (error) {
        throw new InternalServerError("Error creating user");
    }
}