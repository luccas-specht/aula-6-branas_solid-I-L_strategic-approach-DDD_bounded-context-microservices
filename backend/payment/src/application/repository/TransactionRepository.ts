import Transaction from '../../domain/entity/Transaction';

export default interface TransactionRepository {
  save(transaction: Transaction): Promise<void>;
  get(transactionId: string): Promise<Transaction>;
}
