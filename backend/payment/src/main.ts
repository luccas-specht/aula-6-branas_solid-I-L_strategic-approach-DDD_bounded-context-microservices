import ProcessPayment from './application/usecase/processPayment/processPayment';
import PaymentController from './infra/controller/PaymentController';
import { PgPromiseAdapter } from './infra/database/DatabaseConnection';
import { HapiAdapter } from './infra/http/HttpServer';

const connection = new PgPromiseAdapter();

const processPayment = new ProcessPayment();
const httpServer = new HapiAdapter();

new PaymentController(httpServer, processPayment);
httpServer.listen(3002);
