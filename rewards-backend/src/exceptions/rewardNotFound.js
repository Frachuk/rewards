export default class RewardNotFoundException extends Error {
  constructor(message = 'RewardNotFoundException Error Message') {
    super(message);
  }
}
