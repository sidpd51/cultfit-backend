import express from 'express';
import { createUserHandler, destroyUserHandler, getAllUsersHandler, updateUserHandler } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { createUserSchema, updateUserSchema } from '../../validators/user.validator';

const userRouter = express.Router();

userRouter.get('/', getAllUsersHandler);
userRouter.post('/', validateRequetBody(createUserSchema), createUserHandler);
userRouter.patch('/:id', validateRequetBody(updateUserSchema), updateUserHandler);
userRouter.delete('/:id', destroyUserHandler)

export default userRouter;