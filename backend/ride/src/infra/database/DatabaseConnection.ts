import pgp from 'pg-promise';

export default interface DatabaseConnection {
  query(statement: string, params: any): Promise<any>;
  close(): Promise<void>;
}

export class PgPromiseAdapter implements DatabaseConnection {
  connection: any;

  constructor() {
    this.connection = pgp()('postgres://postgres:231123@localhost:5433/app');
  }

  query(statement: string, params: any) {
    return this.connection.query(statement, params);
  }

  close() {
    return this.connection.$pool.end();
  }
}
