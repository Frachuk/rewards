import FetchService from './fetch';

export class AccountsService {
  static baseUrl = 'http://localhost:3000';

  static getCreditsByUserId = (id) => FetchService.getCreditsByUserId('account', id);
}
