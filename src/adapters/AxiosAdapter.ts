import { IHttpClient, IHttpResponse } from '../interfaces';

import axios from 'axios';

/** Implementação do Padrão Adapter em si.
 * Foi criada uma classe AxiosAdapter que implementa o contrato IHttpClient.
 */
export class AxiosAdapter implements IHttpClient {
  async get<T>(url: string): Promise<IHttpResponse<T>> {
    const result = await axios.get<T>(url);
    return { statusCode: result.status, body: result.data };
  }
}
