export default interface PaymentGateway {
  checkout(): Promise<void>;
}
