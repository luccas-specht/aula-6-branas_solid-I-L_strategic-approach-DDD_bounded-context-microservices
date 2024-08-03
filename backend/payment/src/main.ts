import ProcessPayment from './application/usecase/ProcessPayment/ProcessPayment';
import PaymentController from './infra/controller/PaymentController';
import { PgPromiseAdapter } from './infra/database/DatabaseConnection';

import PJBankGateway from './infra/gateway/PJBankGateway';
import { AxiosAdapter } from './infra/http/HttpClient';
import { HapiAdapter } from './infra/http/HttpServer';
import TransactionRepositoryDatabase from './infra/repository/TransactionRepository';
import TransactionRepositoryInMemory from './infra/repository/TransactionRepositoryFake';

(() => {
  const processPayment = new ProcessPayment(
    new TransactionRepositoryInMemory(),
    new PJBankGateway()
  );
  const httpServer = new HapiAdapter();

  new PaymentController(httpServer, processPayment);
  httpServer.listen(3002);
})();
