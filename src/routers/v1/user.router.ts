import express from 'express';
import { destroyUserHandler, getAllUsersHandler, updateUserHandler } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { updateUserSchema } from '../../validators/user.validator';

const userRouter = express.Router();

userRouter.get('/', getAllUsersHandler);
userRouter.patch('/:id', validateRequetBody(updateUserSchema), updateUserHandler);
userRouter.delete('/:id', destroyUserHandler)

export default userRouter;