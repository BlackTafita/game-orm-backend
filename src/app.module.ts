import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Theme } from './core/entities/theme.entity';

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'game-orm',
      entities: [Theme],
    }),
    ThemeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
