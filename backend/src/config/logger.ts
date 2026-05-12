import winston from 'winston';
import { Request, Response, NextFunction } from 'express';
import { env } from './env';

// 3. Log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const getLevel = () => {
  const isDevelopment = env.NODE_ENV === 'development';
  return isDevelopment ? 'debug' : 'info';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'cyan',
};

winston.addColors(colors);

// 1. Development format
const devFormat = winston.format.combine(
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.colorize({ all: false, level: true }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaString = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
    return `${timestamp} | ${level} | ${message}${metaString}`;
  })
);

// 2. Production format
const prodFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

const transports: winston.transport[] = [
  new winston.transports.Console({
    format: env.NODE_ENV === 'production' ? prodFormat : devFormat,
  }),
];

if (env.NODE_ENV === 'production') {
  transports.push(
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: prodFormat,
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: prodFormat,
    })
  );
}

const logger = winston.createLogger({
  level: getLevel(),
  levels,
  transports,
  exceptionHandlers:
    env.NODE_ENV === 'production'
      ? [new winston.transports.File({ filename: 'logs/exceptions.log', format: prodFormat })]
      : [new winston.transports.Console({ format: devFormat })],
});

// 4. HTTP Logger Middleware
export function httpLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const { method, originalUrl } = req;
    const { statusCode } = res;

    let statusColored = String(statusCode);

    if (env.NODE_ENV === 'development') {
      if (statusCode >= 500) {
        statusColored = `\x1b[31m${statusCode}\x1b[0m`; // Red
      } else if (statusCode >= 400) {
        statusColored = `\x1b[31m${statusCode}\x1b[0m`; // Red
      } else if (statusCode >= 300) {
        statusColored = `\x1b[33m${statusCode}\x1b[0m`; // Yellow
      } else {
        statusColored = `\x1b[32m${statusCode}\x1b[0m`; // Green
      }
    }

    const message = `${method} | ${originalUrl} | ${statusColored} | ${duration}ms`;
    logger.http(message);
  });

  next();
}

// 5. Stream object for Morgan integration
export const stream = {
  write: (message: string) => {
    logger.http(message.trim());
  },
};

export default logger;
