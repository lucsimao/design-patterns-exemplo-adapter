import { IHttpClient } from './interfaces';

export class Client {
  private httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  async buscaUsuario(url: string) {
    return await this.httpClient.get(url);
  }
}
