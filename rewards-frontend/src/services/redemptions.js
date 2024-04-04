import FetchService from './fetch';

export class RedemptionsService {
  static baseUrl = 'http://localhost:3000';

  static redeem = async (body) => FetchService.post(body, 'redemption');

  static getByUserId = async (user_id) => FetchService.get(`redemptions/user/${user_id}`);
}
