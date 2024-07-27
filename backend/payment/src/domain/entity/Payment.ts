export default class Payment {
  constructor(readonly rideId: string, readonly amount: number) {
    this.rideId = rideId;
    this.amount = amount;
  }

  static create(amount: number) {
    const rideId = crypto.randomUUID();
    return new Payment(rideId, amount);
  }
}
