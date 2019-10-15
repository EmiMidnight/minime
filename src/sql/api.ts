import * as sql from "sql-bricks-postgres";

export type Id<T> = bigint & { __id: T };

export interface Row {
  [key: string]: string;
}

export interface Transaction {
  modify(stmt: sql.Statement): Promise<void>;

  fetchRow(stmt: sql.SelectStatement): Promise<Row | undefined>;

  fetchRows(stmt: sql.SelectStatement): Promise<Row[]>;

  raw(sql: string): Promise<void>;
}

export interface DataSource {
  transaction<T>(callback: (txn: Transaction) => Promise<T>): Promise<T>;

  vacuum(): Promise<void>;
}