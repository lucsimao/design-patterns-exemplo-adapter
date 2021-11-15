import { IHttpResponse } from '.';
/** Para o funcionamento do adapter, é necessário uma interface que defina o contrato de uso do recurso que quero criar/utilizar.
 * Neste exemplo, uma interface IHttpClient foi criada com um contrato de como deve ser feito uma chamada do método get.
 */
export interface IHttpClient {
  get<T>(url: string): Promise<IHttpResponse<T>>;
}
