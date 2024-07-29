import TransactionRepository from '../../application/repository/TransactionRepository';

export default class TransactionRepositoryFake
  implements TransactionRepository
{
  private table: any = [];
  constructor() {}
  async createTransaction(rideId: string, amount: number): Promise<string> {
    const transaction = {
      transactionId: `id-${Math.random()}`,
      rideId,
      amount,
      date: new Date(),
      status: 'success',
    };

    this.table.push(transaction);

    return transaction.transactionId;
  }
}
