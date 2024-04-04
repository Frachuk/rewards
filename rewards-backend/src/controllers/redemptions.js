import RedemptionsService from '../services/redemptions';
import { generateSuccessResponse } from '../utils';

export default class RedemptionsController {
  static insert = async (req, res, next) => {
    try {
      const { body: { reward_id, user_id } } = req;
      const result = await RedemptionsService.redeem({ reward_id, user_id });

      res.json(generateSuccessResponse({ message: 'created', result }));
    } catch (error) {
      next(error);
    }
  };

  static getByUserId = async (req, res, next) => {
    try {
      const { params: { user_id } } = req;
      const result = await RedemptionsService.getByUserId(user_id);

      res.json(generateSuccessResponse({ result }));
    } catch (error) {
      next(error);
    }
  };
}
