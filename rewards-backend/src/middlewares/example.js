import { logger } from '../utils';

export const exampleMiddleware = (_req, _res, next) => {
  logger.info('Using example middleware');
  next();
};
