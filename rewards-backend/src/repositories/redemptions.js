import KnexRepository from '.';
import RewardsRepository from './rewards';

export default class RedemptionsRepository extends KnexRepository {
  static tableName = 'redemptions';

  static insert = async (redemption, trx) => trx(RedemptionsRepository.tableName).returning('*').insert(redemption);

  static getByUserId = async (user_id) => RedemptionsRepository
    .client(RedemptionsRepository.tableName)
    .select('*')
    .join(RewardsRepository.tableName, 'rewards.id', `${RedemptionsRepository.tableName}.reward_id`)
    .orderBy(`${RedemptionsRepository.tableName}.date`, 'desc')
    .where('user_id', user_id);
}
