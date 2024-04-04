import { constants } from 'http2';
import { generateErrorResponse, logger } from '../utils';

export default class ExceptionHandler {
  // The properties below must match the class name of the exception
  static errors = {
    UserNotFoundException: (res, message) => res.status(constants.HTTP_STATUS_UNAUTHORIZED).send(generateErrorResponse(message)),
  };

  // eslint-disable-next-line no-unused-vars
  static errorHandler = (error, _req, res, _next) => {
    logger.error('Error handling', error);

    const {
      constructor: { name: exceptionName },
    } = error;

    Object.keys(this.errors).includes(exceptionName)
      ? this.errors[exceptionName](res, error.message)
      : res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).send(generateErrorResponse(error.message));
  };
}
