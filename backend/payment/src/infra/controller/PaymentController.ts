import ProcessPayment from '../../application/usecase/ProcessPayment/ProcessPayment';
import HttpServer from '../http/HttpServer';

export default class PaymentController {
  constructor(
    readonly httpServer: HttpServer,
    readonly processPayment: ProcessPayment
  ) {
    this.httpServer.register(
      'post',
      '/payment_transaction',
      async (params: any, body: any) => {
        const input = body;
        await this.processPayment.execute(input);
      }
    );
  }
}
