/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Card } from 'src/core/entities/card.entity';
import { CardService } from './card.service';

@Crud({
    model: {
        type: Card,
    },
    query: {
        join: {
            tags: {
                eager: true,
            },
            theme: {
                eager: true,
            }
        }
    }
})
@Controller('card')
export class CardController implements CrudController<Card> {
    constructor(public service: CardService) {}
}
