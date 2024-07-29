import ProcessPayment from './application/usecase/ProcessPayment/ProcessPayment';
import PaymentController from './infra/controller/PaymentController';
import { PgPromiseAdapter } from './infra/database/DatabaseConnection';
import PJBankGateway from './infra/gateway/PJBankGateway';
import { HapiAdapter } from './infra/http/HttpServer';
import TransactionRepositoryDatabase from './infra/repository/TransactionRepository';

(() => {
  const connection = new PgPromiseAdapter();
  const transactionRepository = new TransactionRepositoryDatabase(connection);
  const processPayment = new ProcessPayment(
    transactionRepository,
    new PJBankGateway()
  );
  const httpServer = new HapiAdapter();

  new PaymentController(httpServer, processPayment);
  httpServer.listen(3002);
})();
