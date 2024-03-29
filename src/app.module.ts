import { TagModule } from './tag/tag.module';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Theme } from './core/entities/theme.entity';
import { Tag } from './core/entities/tag.entity';
import { Card } from './core/entities/card.entity';
import { CardModule } from './card/card.module';
import { GameModule } from './game/game.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { fsReadFile } from 'ts-loader/dist/utils';
import * as fs from 'fs';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TagModule,
    CoreModule,
    TypeOrmModule.forRoot({
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
      entities: [Theme, Tag, Card],
    }),
    ThemeModule,
    CardModule,
    GameModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
