import { IHttpClient, IHttpResponse } from '../interfaces';

import got from 'got';

/** Implementação do Padrão Adapter em si.
 * Foi criada uma classe GotAdapter que implementa o contrato IHttpClient.
 */
export class GotAdapter implements IHttpClient {
  async get<T>(url: string): Promise<IHttpResponse<T>> {
    const result = await got.get(url);
    const body = JSON.parse(result.body);
    return { statusCode: result.statusCode, body: body as T };
  }
}
