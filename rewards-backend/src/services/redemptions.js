import RedemptionsRepository from '../repositories/redemptions';
import Redemption from '../models/redemption';
import AccountsRepository from '../repositories/accounts';
import RewardsRepository from '../repositories/rewards';
import KnexRepository from '../repositories';

export default class RedemptionsService {
  static redeem = async ({ user_id, reward_id }) => {
    const result = await KnexRepository.client.transaction(async (trx) => {
      const [accountsData] = await trx(AccountsRepository.tableName).select('*').where('user_id', user_id);
      const [rewardData] = await trx(RewardsRepository.tableName).select('*').where('id', reward_id);

      const conditions = [
        [!accountsData, 'User not found'],
        [!rewardData, 'Reward not found'],
        [accountsData?.credits < rewardData?.points_required, 'User does not have enough credits'],
      ];

      const [errorCondition, message] = conditions.find(([condition]) => condition) || [];

      if (errorCondition) throw new Error(message);

      const [update_result] = await AccountsRepository.updateCredits(user_id, accountsData.credits - rewardData.points_required, trx);
      await RedemptionsRepository.insert(new Redemption({ user_id, reward_id }), trx);

      return update_result;
    });

    return result;
  };

  static getByUserId = async (user_id) => RedemptionsRepository.getByUserId(user_id);
}
