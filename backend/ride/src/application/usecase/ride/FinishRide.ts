import PaymentGateway from '../../gateway/PaymentGateway';
import RideRepository from '../../repository/RideRepository';

export default class FinishRide {
  constructor(
    readonly rideRepository: RideRepository,
    readonly paymentGateway: PaymentGateway
  ) {}

  async execute(input: Input): Promise<void> {
    const transactionId = await this.paymentGateway.processPayment(input);
    if (!transactionId) throw new Error('bret');

    const ride = await this.rideRepository.getRideById(input.rideId);
    await this.rideRepository.updateRide(ride);
    ride.finish();
  }
}

type Input = {
  rideId: string;
  amount: number;
};
