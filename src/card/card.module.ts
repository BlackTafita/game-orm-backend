import { CardController } from './card.controller';
import { CardService } from './card.service';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/core/entities/card.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Card]),
    ],
    controllers: [
        CardController,
    ],
    providers: [
        CardService,
    ],
})
export class CardModule { }
