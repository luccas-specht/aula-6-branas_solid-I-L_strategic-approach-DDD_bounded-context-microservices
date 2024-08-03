import TransactionRepository from '../../application/repository/TransactionRepository';
import Transaction from '../../domain/entity/Transaction';

export default class TransactionRepositoryInMemory
  implements TransactionRepository
{
  private table: any[] = [];
  constructor() {}

  async save(transaction: Transaction): Promise<void> {
    this.table.push(transaction);
  }

  async get(transactionId: string): Promise<Transaction> {
    return this.table.find((transaction) => transaction.id === transactionId);
  }
}
