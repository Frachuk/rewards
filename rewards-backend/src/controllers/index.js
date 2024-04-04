import { generateSuccessResponse, logger } from '../utils';

export default class IndexController {
  static healthzCheck = async (_req, res, next) => {
    try {
      logger.info('Some message');
      res.json(generateSuccessResponse({ timestamp: new Date().toString() }));
    } catch (error) {
      next(error);
    }
  };
}
