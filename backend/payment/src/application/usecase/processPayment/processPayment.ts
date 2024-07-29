import TransactionRepository from '../../repository/TransactionRepository';
import UseCase from '../UseCase';

type DTO = {
  rideId: string;
  amount: number;
};

export default class ProcessPayment implements UseCase<DTO> {
  constructor(readonly transactionPayment: TransactionRepository) {}

  async execute(input: DTO) {
    await this.transactionPayment.createTransaction(input.rideId, input.amount);
  }
}
