import dotenv from 'dotenv';

type ServiceType = {
    PORT: number;
}

function loadEnv() {
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();

type DbConfigType = {
    DB_HOST: string,
    DB_USER: string,
    DB_PASSWORD: string,
    DB_NAME: string,
    DB_PORT: number
}

export const serverConfig: ServiceType = {
    PORT: Number(process.env.PORT) || 3000,
};

export const dbConfig:DbConfigType = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root@123',
    DB_NAME: process.env.DB_NAME || 'cultfit_dev',
    DB_PORT: Number(process.env.DB_PORT) || 3306
}