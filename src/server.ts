import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';

const app = express();
app.use(express.json()); 

const PORT: number = serverConfig.PORT;

app.use('/api/v1',v1Router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})