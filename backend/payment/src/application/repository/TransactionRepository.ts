export default interface TransactionRepository {
  createTransaction(rideId: string, amount: number): Promise<string>;
}
