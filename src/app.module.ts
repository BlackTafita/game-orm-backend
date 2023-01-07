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

@Module({
  imports: [
    TagModule,
    CoreModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'tafita',
      entities: [Theme, Tag, Card],
    }),
    ThemeModule,
    CardModule,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
