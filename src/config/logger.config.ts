import winston from "winston";
const { format, transports, addColors, createLogger } = winston;
const { combine, timestamp, errors, printf, colorize } = format;

const customLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5,
    },
    colors: {
        fatal: 'magenta',
        error: 'red',
        warn: 'yellow',
        info: 'green',
        debug: 'blue',
        trace: 'gray',
    }
};

addColors(customLevels.colors);

export const logger = createLogger({
    level: process.env.LEVEL || 'info',
    levels: customLevels.levels,
    format: combine(
        colorize({ all: true }),
        timestamp(),
        errors({ stack: true }),
        printf(({ level, message, timestamp }) => {
            return `${timestamp} [${level}] ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
    ]
})
