export default class UserNotFoundException extends Error {
  constructor(message = 'UserNotFoundException Error Message') {
    super(message);
  }
}
