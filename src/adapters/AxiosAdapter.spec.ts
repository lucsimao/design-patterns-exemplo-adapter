import { AxiosAdapter } from './AxiosAdapter';
import { IUser } from '../interfaces';

const url = 'https://jsonplaceholder.typicode.com/users';

describe('Axios Tests', () => {
  it('should return value when called', async () => {
    const axiosAdapter = new AxiosAdapter();

    const result = await axiosAdapter.get<IUser[]>(url);

    expect(result.statusCode).toBe(200);
    expect(result.body[0].address).toEqual({
      city: 'Gwenborough',
      geo: { lat: '-37.3159', lng: '81.1496' },
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
    });
  });
});
