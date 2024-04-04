import FetchService from './fetch';

export class RewardsService {
  static baseUrl = 'http://localhost:3000';

  static getAll = async () => FetchService.get('rewards');
}
