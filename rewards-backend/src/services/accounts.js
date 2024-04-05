import Account from '../models/account';
import User from '../models/user';
import AccountsRepository from '../repositories/accounts';
import UsersRepository from '../repositories/users';

export default class AccountsService {
  static insert = async (accountData, userData) => {
    const result = await AccountsRepository.client.transaction(async (trx) => {
      const user = new User(userData);

      const [userValues] = await trx(UsersRepository.tableName).returning('*').insert(user);

      const account = new Account({ ...accountData, user_id: userValues.id });

      const [registerResult] = await trx(AccountsRepository.tableName).returning(
        '*',
      ).insert(account);

      const parsedUserData = {
        name: registerResult.name,
        credits: registerResult.credits,
        first_name: userValues.first_name,
        last_name: userValues.last_name,
        id: registerResult.user_id,
        age: userValues.age,
      };

      return parsedUserData;
    });

    return result;
  };

  static login = async (name, password) => {
    const result = await AccountsRepository.login(name, password);

    return result;
  };

  static getByUserId = async (user_id) => {
    const result = await AccountsRepository.getByUserId(user_id);

    return result;
  };

  static updateCredits = async (user_id, amount) => {
    const result = await AccountsRepository
      .client(AccountsRepository.tableName)
      .returning(`${AccountsRepository.tableName}.credits`)
      .update({ credits: amount })
      .where('user_id', user_id);

    return result;
  };

  static getCreditsByUserId = async (user_id) => {
    const result = await AccountsRepository.getCreditsByUserId(user_id);

    return result;
  };
}
