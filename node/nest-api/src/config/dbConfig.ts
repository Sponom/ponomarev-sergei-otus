import { SequelizeOptions } from "sequelize-typescript";

export const dbConfig: SequelizeOptions = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'otus',
  password: 'otus',
  database: 'otus'
}