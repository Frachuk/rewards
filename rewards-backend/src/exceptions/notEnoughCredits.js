export default class NotEnoughCreditsException extends Error {
  constructor(message = 'NotEnoughCreditsException Error Message') {
    super(message);
  }
}
