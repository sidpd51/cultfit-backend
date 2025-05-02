import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import { appErrorHandler } from './middlewares/error.middleware';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';

const app = express();
app.use(express.json()); 


const PORT: number = serverConfig.PORT;


app.use(attachCorrelationIdMiddleware)
app.use('/api/v1',v1Router);
app.use(appErrorHandler);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})