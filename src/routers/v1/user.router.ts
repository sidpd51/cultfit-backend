import express from 'express';
import { createUser, getAllUsers, updateUser } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { createUserSchema, updateUserSchema } from '../../validators/user.validator';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', validateRequetBody(createUserSchema), createUser);
userRouter.patch('/:id', validateRequetBody(updateUserSchema), updateUser);

export default userRouter;