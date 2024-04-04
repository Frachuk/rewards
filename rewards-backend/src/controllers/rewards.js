import RewardsService from '../services/rewards';
import { generateSuccessResponse } from '../utils';

export default class RewardsController {
  static insert = async (req, res, next) => {
    try {
      const { body: { name, description, points_required } } = req;
      const result = await RewardsService.insert({ name, description, points_required });

      res.json(generateSuccessResponse({ message: 'created', result }));
    } catch (error) {
      next(error);
    }
  };

  static insertMany = async (req, res, next) => {
    try {
      const { body: rewards } = req;
      const result = await RewardsService.insertMany(rewards);

      res.json(generateSuccessResponse({ message: 'created', result }));
    } catch (error) {
      next(error);
    }
  };

  static getAll = async (req, res, next) => {
    try {
      const { query: { limit, offset } } = req;
      const result = await RewardsService.getAll(limit, offset);

      res.json(generateSuccessResponse(result));
    } catch (error) {
      next(error);
    }
  };
}
