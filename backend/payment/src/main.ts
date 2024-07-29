import ProcessPayment from './application/usecase/ProcessPayment/ProcessPayment';
import PaymentController from './infra/controller/PaymentController';
import { PgPromiseAdapter } from './infra/database/DatabaseConnection';
import { HapiAdapter } from './infra/http/HttpServer';
import TransactionRepositoryFake from './infra/repository/TransactionRepositoryFake';

const processPayment = new ProcessPayment(new TransactionRepositoryFake());
const httpServer = new HapiAdapter();

new PaymentController(httpServer, processPayment);
httpServer.listen(3002);
