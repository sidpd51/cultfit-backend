import { UniqueConstraintError, ValidationError } from "sequelize";
import User from "../db/models/user";
import { createUserDto, updateUserDto } from "../dto/user.dto";
import { BadRequestError, InternalServerError, NotFoundError } from "../utils/errors/app.error";

export const createUser = async (user: createUserDto) => {
    try {
        const newUser = await User.create(user);
        const { password, ...withNoPassword } = newUser.dataValues;
        return withNoPassword;
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            throw new BadRequestError("A user with same email exist.")
        }
        if (error instanceof ValidationError) {
            const messages = error.errors.map((err) => err.message.split('.')[1]);
            throw new BadRequestError(messages.join(", "));
        }
        throw new InternalServerError("Error creating user");
    }
}

export const updateUser = async (userId: number, payload: updateUserDto) => {
    try {
        const [affectedRows] = await User.update(payload, {
            where: {
                id: userId
            },
            individualHooks: true
        });
        if (affectedRows === 0) {
            throw new NotFoundError("User not found or no changes applied");
        }
        const user = await User.findByPk(userId);
        if (!user) {
            throw new NotFoundError("User not found after update");
        }
        const { password, ...noPwdPayload } = user.toJSON();
        return noPwdPayload;
    } catch (error) {
        if (error instanceof UniqueConstraintError) {
            const messages = error.errors.map((err) => err.message);
            throw new BadRequestError(messages.join(", "));
        }
        if (error instanceof ValidationError) {
            const messages = error.errors.map((err) => err.message.split('.')[1]);
            throw new BadRequestError(messages.join(", "));
        }
        if (error instanceof NotFoundError) {
            throw error;
        }
        throw new InternalServerError("Something went wrong while updating user");
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

export const getUserByEmail = async (email: string) => {
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            throw new NotFoundError(`user with email:${email} not found`);
        }
        return user;
    } catch (error) {
        if (error instanceof NotFoundError) {
            throw error;
        }
        throw new InternalServerError("Something went wrong while getting user")
    }
}