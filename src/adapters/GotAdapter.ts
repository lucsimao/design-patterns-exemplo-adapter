import { IHttpClient, IHttpResponse } from '../interfaces';

import got from 'got';

export class GotAdapter implements IHttpClient {
  async get<T>(url: string): Promise<IHttpResponse<T>> {
    const result = await got.get(url);
    const body = JSON.parse(result.body);
    return { statusCode: result.statusCode, body: body as T };
  }
}
