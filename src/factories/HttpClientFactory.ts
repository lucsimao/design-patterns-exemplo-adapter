import { AxiosAdapter } from '../adapters/AxiosAdapter';
import { IHttpClient } from '../interfaces';

export class HttpClientFactory {
  public static create(): IHttpClient {
    return new AxiosAdapter();
  }
}
