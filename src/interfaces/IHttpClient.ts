import { IHttpResponse } from '.';

export interface IHttpClient {
  get<T>(url: string): Promise<IHttpResponse<T>>;
}
