import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import {CardService} from "../card/card.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Card} from "../core/entities/card.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([Card]),
  ],
  controllers: [GameController],
  providers: [CardService],
})
export class GameModule {}
