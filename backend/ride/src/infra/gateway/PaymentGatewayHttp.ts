import HttpClient from '../http/HttpClient';
import PaymentGateway from '../../application/gateway/PaymentGateway';

export default class PaymentGatewayHttp implements PaymentGateway {
  constructor(readonly httpClient: HttpClient) {}

  async processPayment(input: {
    rideId: string;
    amount: number;
  }): Promise<void> {
    return this.httpClient.post('http://localhost:3002/process_payment', input);
  }
}
