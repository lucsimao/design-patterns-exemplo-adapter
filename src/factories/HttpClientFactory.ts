import { AxiosAdapter } from '../adapters/AxiosAdapter';
import { IHttpClient } from '../interfaces';
/** Aplicação do Padrão Factory
 * Obs: para mudar a lib utilizada, só preciso criar um novo adapter e retornar sua instância no método create.
 * Dessa forma é possível trocar a dependência do projeto todo alterando somente uma linha de código
 */
export class HttpClientFactory {
  public static create(): IHttpClient {
    return new AxiosAdapter();
  }
}
