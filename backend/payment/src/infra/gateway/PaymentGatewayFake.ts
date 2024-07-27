import PaymentGateway from '../../application/gateway/PaymentGateway';

export default class PaymentGatewayFake implements PaymentGateway {
  async checkout(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
