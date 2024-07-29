export default interface PaymentGateway {
  processPayment(input: InputProcessPayment): Promise<any>;
}

type InputProcessPayment = {
  rideId: string;
  amount: number;
};
