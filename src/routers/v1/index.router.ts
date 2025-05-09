import express from 'express';
import userRouter from './user.router';
import centerRouter from './center.router';
import { authenticationMiddleware } from '../../middlewares/authentication.middleware';
import { createUserHandler, signInHandler } from '../../controllers/user.controller';
import centerHolidayRouter from './centerHoliday.router';
import { isAdmin } from '../../middlewares/isAdmin.middleware';
import { validateRequetBody } from '../../validators';
import { createUserSchema } from '../../validators/user.validator';

const v1Router = express.Router();

v1Router.post('/signin', signInHandler);
v1Router.post('/signup', validateRequetBody(createUserSchema), createUserHandler)
v1Router.use(authenticationMiddleware);
v1Router.use('/users', userRouter);
v1Router.use(isAdmin)
v1Router.use('/centers', centerRouter);
v1Router.use('/holidays', centerHolidayRouter);

export default v1Router;