import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Tag } from './src/core/entities/tag.entity';
import { Theme } from './src/core/entities/theme.entity';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tafita',
  database: 'postgres',
  entities: [Tag, Theme],
});