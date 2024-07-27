import PaymentController from './infra/controller/PaymentController';
import { PgPromiseAdapter } from './infra/database/DatabaseConnection';
import { HapiAdapter } from './infra/http/HttpServer';

const connection = new PgPromiseAdapter();

const httpServer = new HapiAdapter();

new PaymentController(httpServer);
httpServer.listen(3002);
