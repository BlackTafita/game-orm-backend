/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Card } from 'src/core/entities/card.entity';

@Injectable()
export class CardService extends TypeOrmCrudService<Card> {
    constructor(@InjectRepository(Card) repo) {
        super(repo);
    }

    async getRandomCards(): Promise<Card[]> {
        return this.repo.createQueryBuilder()
            .orderBy("RANDOM()")
            .limit(45)
            .getMany()
    }
}
