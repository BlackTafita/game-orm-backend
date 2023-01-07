import { DataSource } from 'typeorm';
import { config } from 'dotenv';
 
config();
 

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tafita',
  database: 'postgres',
  entities: ["dist/src/core/entities/**/*{.js,.ts}"],
  migrations: ["dist/migrations/**/*{.js,.ts}"],
  subscribers: ["dist/src/core/subscribers/**/*{.js,.ts}"],
});