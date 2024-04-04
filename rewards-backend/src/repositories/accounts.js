import KnexRepository from '.';
import UsersRepository from './users';

export default class AccountsRepository extends KnexRepository {
  static tableName = 'accounts';

  static insert = async (account) => AccountsRepository.client(AccountsRepository.tableName).insert(account);

  static getByUserId = async (user_id) => AccountsRepository.client(AccountsRepository.tableName)
    .select(
      `${AccountsRepository.tableName}.name`,
      `${AccountsRepository.tableName}.credits`,
      `${UsersRepository.tableName}.id`,
      `${UsersRepository.tableName}.first_name`,
      `${UsersRepository.tableName}.last_name`,
      `${UsersRepository.tableName}.age`,
    )
    .join(UsersRepository.tableName, 'users.id', `${AccountsRepository.tableName}.user_id`)
    .where('user_id', user_id);

  static updateCredits = async (user_id, amount, trx) => trx(AccountsRepository.tableName)
    .returning(`${AccountsRepository.tableName}.credits`)
    .update({ credits: amount })
    .where('user_id', user_id);

  static login = async (name, password) => AccountsRepository.client(AccountsRepository.tableName)
    .select(
      `${AccountsRepository.tableName}.name`,
      `${AccountsRepository.tableName}.credits`,
      `${UsersRepository.tableName}.id`,
      `${UsersRepository.tableName}.first_name`,
      `${UsersRepository.tableName}.last_name`,
      `${UsersRepository.tableName}.age`,
    )
    .join(UsersRepository.tableName, 'users.id', `${AccountsRepository.tableName}.user_id`)
    .where({
      name,
      password,
    });
}
