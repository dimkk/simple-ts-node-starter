import * as winston from 'winston'
 
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.colorize()
),
  defaultMeta: { service: 'trendytrend' },
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
} else {
  logger.add(new winston.transports.File({ filename: 'error.log', level: 'error' }));
  logger.add(new winston.transports.File({ filename: 'all.log'}));
}

export default logger