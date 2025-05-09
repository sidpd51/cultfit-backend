import express from 'express';
import { serverConfig } from './config';
import { logger } from './config/logger.config';
import Center from './db/models/center';
import sequelize from './db/models/sequelize';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import { appErrorHandler } from './middlewares/error.middleware';
import v1Router from './routers/v1/index.router';

const app = express();
app.use(express.json());


const PORT: number = serverConfig.PORT;


app.use(attachCorrelationIdMiddleware)
app.use('/api/v1', v1Router);
app.use(appErrorHandler);


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await Center.truncate();
    await sequelize.authenticate();
    logger.info('Database connection has been established successfully!');
})