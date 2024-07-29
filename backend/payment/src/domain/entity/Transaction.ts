export default class Transaction {
  constructor(
    readonly rideId: string,
    readonly amount: number,
    readonly transactionId: string,
    readonly date: Date,
    public status: string
  ) {
    this.rideId = rideId;
    this.amount = amount;
    this.transactionId = transactionId;
    this.date = date;
    this.status = status;
  }

  static create(rideId: string, amount: number) {
    const transactionId = crypto.randomUUID();
    const status = 'pending';
    const date = new Date();
    return new Transaction(rideId, amount, transactionId, date, status);
  }

  approve() {
    this.status = 'approved';
  }

  reject() {
    this.status = 'rejected';
  }
}
