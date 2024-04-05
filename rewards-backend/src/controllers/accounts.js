import AccountsService from '../services/accounts';
import { generateSuccessResponse } from '../utils';
import UserNotFoundException from '../exceptions/userNotFound';

export default class AccountsController {
  static insert = async (req, res, next) => {
    try {
      const { body: { accountData, userData } } = req;
      const result = await AccountsService.insert(accountData, userData);

      res.json(generateSuccessResponse({ message: 'created', result }));
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { body: { name, password } } = req;
      const result = await AccountsService.login(name, password);

      if (!result.length) throw new UserNotFoundException('User not found for those credentials');

      res.json(generateSuccessResponse({ result }));
    } catch (error) {
      next(error);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const { params: { user_id } } = req;
      const result = await AccountsService.getByUserId(user_id);

      if (!result.length) throw new UserNotFoundException('User not found');

      res.json(generateSuccessResponse({ result }));
    } catch (error) {
      next(error);
    }
  };

  static updateCredits = async (req, res, next) => {
    try {
      const { body: { user_id, amount } } = req;
      const result = await AccountsService.updateCredits(user_id, amount);

      res.json(generateSuccessResponse({ result }));
    } catch (error) {
      next(error);
    }
  };

  static getCreditsByUserId = async (req, res, next) => {
    try {
      const { params: { user_id } } = req;
      const [result] = await AccountsService.getCreditsByUserId(user_id);

      if (!result) throw new UserNotFoundException('User not found');

      res.json(generateSuccessResponse({ result }));
    } catch (error) {
      next(error);
    }
  };
}
