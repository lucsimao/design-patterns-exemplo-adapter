/** Contrato de Retorno do método get criado.
 * Aqui foi utilizado o conceito de Generics <T> para delegar
 * a responsabilidade de definir o tipo do body à classe que irá utilizá-lo
 */
export interface IHttpResponse<T> {
  statusCode: number;
  body: T;
}
