import KnexRepository from '.';

export default class RewardsRepository extends KnexRepository {
  static tableName = 'rewards';

  static insert = async (reward) => RewardsRepository.client(RewardsRepository.tableName).returning('*').insert(reward);

  static insertMany = async (rewards) => RewardsRepository.client(RewardsRepository.tableName).returning('*').insert(rewards);

  static getById = async (id) => RewardsRepository.client(RewardsRepository.tableName).select('*').where('id', id);

  static getAll = async (limit = 100, offset = 0, active = true) => {
    const rewards = await RewardsRepository.client(RewardsRepository.tableName)
      .select(
        '*',
      )
      .offset(offset)
      .limit(limit)
      .where('active', active);

    const [total] = await RewardsRepository.client(RewardsRepository.tableName).count('*');

    return { rewards, total };
  };
}
