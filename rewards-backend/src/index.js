import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes';
import { logger } from './utils/index';
import ExceptionHandler from './handler/exception';
import UUIDIdentifier from './middlewares/uuidIdentifier';

(() => {
  const app = express();
  const port = 3000;

  app.use(cors());
  app.use(express.json());
  app.use(express.static('public'));
  app.use(UUIDIdentifier.requestIdMiddleware);
  app.use(router);
  app.use(ExceptionHandler.errorHandler);

  app.listen(port, () => {
    const { APP_NAME } = process.env;
    logger.info(`Application: ${APP_NAME} running on port: ${port}`);
  });
})();
