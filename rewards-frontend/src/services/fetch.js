export default class FetchService {
  static baseUrl = 'http://localhost:3000';

  static post = async (body, route) => {
    const response = await fetch(`${FetchService.baseUrl}/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const {
      data: { result },
    } = await response.json();

    return { data: result, status: response.status };
  };

  static get = async (route) => {
    const response = await fetch(`${FetchService.baseUrl}/${route}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { data } = await response.json();

    return { data, status: response.status };
  };

  static getCreditsByUserId = async (route, user_id) => {
    const response = await fetch(`${FetchService.baseUrl}/${route}/${user_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { data } = await response.json();

    return { data, status: response.status };
  };
}
