import HttpServer from '../http/HttpServer';

export default class PaymentController {
  constructor(readonly httpServer: HttpServer) {
    this.httpServer = httpServer;
  }
}
