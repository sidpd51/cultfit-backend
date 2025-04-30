import express from 'express';
import { serverConfig } from './config';
const app = express();

const PORT: number = serverConfig.PORT;


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})