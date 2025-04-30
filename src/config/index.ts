import dotenv from 'dotenv';

type ServiceType = {
    PORT: number;
}

function loadEnv() {
    dotenv.config();
    console.log('Environment variables loaded');
}

loadEnv();

export const serverConfig: ServiceType = {
    PORT: Number(process.env.PORT) || 3000,
};

