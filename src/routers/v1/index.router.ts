import express from 'express';
import userRouter from './user.router';
import centerRouter from './center.router';

const v1Router = express.Router();

v1Router.use('/users', userRouter);
v1Router.use('/centers', centerRouter);

export default v1Router;