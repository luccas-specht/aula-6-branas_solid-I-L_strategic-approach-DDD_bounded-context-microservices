import ProcessPayment from '../../application/usecase/processPayment/processPayment';
import HttpServer from '../http/HttpServer';

export default class PaymentController {
  constructor(
    readonly httpServer: HttpServer,
    readonly processPayment: ProcessPayment
  ) {
    this.httpServer.register(
      'post',
      '/payment',
      async (params: any, body: any) => {
        const input = body;
        console.log({ input });
        const output = await this.processPayment.execute(input);
        return output;
      }
    );
  }
}
