import { createLogger, transports, format } from 'winston';

const logFormat = format.printf(
  ({ level, message, timestamp }) => {
    return `${level}: ${message} 
      ${timestamp}`;
  }
);

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console({ level: 'info' }),
    new transports.File({
      level: 'warn',
      filename: './logs/warn.log',
    }),
    new transports.File({
      level: 'error',
      filename: './logs/error.log',
    }),
  ],
});
