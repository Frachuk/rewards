import Reward from '../models/reward';
import RewardsRepository from '../repositories/rewards';

export default class RewardsService {
  static insert = async (rewardData) => {
    const result = await RewardsRepository.insert(new Reward({ ...rewardData }));

    return result;
  };

  static insertMany = async (rewards) => {
    const result = await RewardsRepository.insertMany(rewards);

    return result;
  };

  static getAll = async (limit, offset) => {
    const { rewards, total: { count } } = await RewardsRepository.getAll(limit, offset);

    return {
      rewards, rewardsAmount: rewards.length, total: parseInt(count, 10), offset,
    };
  };
}
