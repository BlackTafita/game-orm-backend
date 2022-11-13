import { TagModule } from './tag/tag.module';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Theme } from './core/entities/theme.entity';
import { Tag } from './core/entities/tag.entity';

@Module({
  imports: [
    TagModule,
    CoreModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'game-orm',
      entities: [Theme, Tag],
    }),
    ThemeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
