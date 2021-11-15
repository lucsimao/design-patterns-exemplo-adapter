import { IHttpClient } from './interfaces';

export class Client {
  private httpClient: IHttpClient;

  /** Aplicação da Injeção de Dependência.
   * A classe Client recebe uma implementação de IHttpClient como atributo.
   * Essa implementação será uma instância de um dos AdaptersCriados
   * O método buscaUsuario irá utilizar o método get da
   * interface independente da instância recebida, desde que ela respeite a interface IHttpClient.
   */
  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  async buscaUsuario(url: string) {
    return await this.httpClient.get(url);
  }
}
