import express from 'express';
import { createUserHandler, getAllUsers, updateUser } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { updateUserSchema } from '../../validators/user.validator';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUserHandler);
userRouter.patch('/:id', validateRequetBody(updateUserSchema), updateUser);

export default userRouter;