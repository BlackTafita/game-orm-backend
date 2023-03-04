import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { fsReadFile } from 'ts-loader/dist/utils';
import * as fs from 'fs';

config();

console.log(process.env.DB_SSL);
export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  ssl: fs.existsSync('ca-certificate.crt')
    ? {
        ca: fsReadFile('ca-certificate.crt'),
      }
    : undefined,
  entities: ['dist/src/core/entities/**/*{.js,.ts}'],
  migrations: ['dist/migrations/**/*{.js,.ts}'],
  subscribers: ['dist/src/core/subscribers/**/*{.js,.ts}'],
});
