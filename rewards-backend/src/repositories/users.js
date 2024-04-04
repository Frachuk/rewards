import KnexRepository from '.';

export default class UsersRepository extends KnexRepository {
  static tableName = 'users';

  static insert = async (account) => UsersRepository.client(UsersRepository.tableName).returning('id').insert(account);
}
