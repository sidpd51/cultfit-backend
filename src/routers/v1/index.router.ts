import express from 'express';
import userRouter from './user.router';
import centerRouter from './center.router';
import { authenticationMiddleware } from '../../middlewares/authentication.middleware';
import { signInHandler } from '../../controllers/user.controller';

const v1Router = express.Router();



userRouter.post('/login', signInHandler)
v1Router.use(authenticationMiddleware)
v1Router.use('/users', userRouter);
v1Router.use('/centers', centerRouter);

export default v1Router;