import { IHttpClient, IHttpResponse } from './interfaces';

import { Client } from './Client';
import { HttpClientFactory } from './factories/HttpClientFactory';

const url = 'any_url';

jest.mock('./factories/HttpClientFactory');

class HttpClientStub implements IHttpClient {
  get<T>(url: string): Promise<IHttpResponse<T>> {
    return Promise.resolve({
      statusCode: 200,
      body: 'any_value' as unknown as T,
    });
  }
}

describe('Client Test', () => {
  it('should return any_value when method is called with httpStub', async () => {
    jest
      .spyOn(HttpClientFactory, 'create')
      .mockReturnValueOnce(new HttpClientStub());
    const client = new Client(HttpClientFactory.create());

    const result = await client.buscaUsuario(url);

    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual('any_value');
  });

  it('should call get when method is called', async () => {
    jest
      .spyOn(HttpClientFactory, 'create')
      .mockReturnValueOnce(new HttpClientStub());
    const getSpy = jest.spyOn(HttpClientStub.prototype, 'get');
    const client = new Client(HttpClientFactory.create());

    await client.buscaUsuario(url);

    expect(getSpy).toBeCalledWith(url);
  });
});
