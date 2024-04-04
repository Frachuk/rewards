import { createLogger, format, transports } from 'winston';
import UUIDIdentifier from '../middlewares/uuidIdentifier';

export const generateSuccessResponse = (body) => ({
  data: {
    ...body,
    status: 'success',
  },
});

export const generateErrorResponse = (message) => ({
  data: {
    message,
    status: 'error',
  },
});

const getUUIDMessage = () => {
  const store = UUIDIdentifier.getStore();
  const reqId = store?.get('requestId') || 'Unassigned';

  return reqId;
};

export const formatedMessage = ({ level, message, stack }) => `Request ID: ${getUUIDMessage()} ${level}: ${message}${stack || ''}`;

const alignedWithTime = format.combine(
  format.align(),
  format.prettyPrint(),
  format.splat(),
  format.json(),
  format.printf(formatedMessage),
);

export const logger = createLogger({
  exitOnError: false,
  format: alignedWithTime,
  level: 'silly',
  silent: process.env.NODE_ENV === 'test',
  transports: [new transports.Console()],
});
