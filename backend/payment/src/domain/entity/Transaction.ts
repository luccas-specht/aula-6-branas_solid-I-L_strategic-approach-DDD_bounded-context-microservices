export default class Transaction {
  constructor(
    readonly rideId: string,
    readonly amount: number,
    readonly transactionId: string,
    readonly date: Date,
    readonly status: string
  ) {
    this.rideId = rideId;
    this.amount = amount;
    this.transactionId = transactionId;
    this.date = date;
    this.status = status;
  }

  static create(rideId: string, amount: number, date: Date, status: string) {
    const transactionId = crypto.randomUUID();
    return new Transaction(rideId, amount, transactionId, date, status);
  }
}
