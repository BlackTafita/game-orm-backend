import { CardController } from './card.controller';
import { CardService } from './card.service';

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        CardController,
    ],
    providers: [
        CardService,
    ],
})
export class CardModule { }
