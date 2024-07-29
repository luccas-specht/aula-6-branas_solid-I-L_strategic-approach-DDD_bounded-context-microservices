import ProcessPayment from '../../src/application/usecase/ProcessPayment/ProcessPayment';
import { PgPromiseAdapter } from '../../src/infra/database/DatabaseConnection';
import PJBankGateway from '../../src/infra/gateway/PJBankGateway';
import TransactionRepositoryDatabase from '../../src/infra/repository/TransactionRepository';

test('Deve criar uma transação', async function () {
  const connection = new PgPromiseAdapter();
  const transactionRepository = new TransactionRepositoryDatabase(connection);

  const processPayment = new ProcessPayment(
    transactionRepository,
    new PJBankGateway()
  );
  const inputProcessPayment = {
    rideId: crypto.randomUUID(),
    amount: 100,
  };
  const outputProcessPayment = await processPayment.execute(
    inputProcessPayment
  );

  console.log(outputProcessPayment);
  expect(outputProcessPayment).toHaveProperty('transactionId');

  await connection.close();
});
