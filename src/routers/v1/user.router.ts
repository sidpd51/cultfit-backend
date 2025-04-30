import express from 'express';
import { createUser, getAllUsers } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { createUserSchema } from '../../validators/user.validator';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', validateRequetBody(createUserSchema), createUser);

export default userRouter;