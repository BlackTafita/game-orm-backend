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
    return this.repo
      .createQueryBuilder()
      .orderBy('RANDOM()')
      .limit(10)
      .getMany();
  }

  async create(card: { description: string }): Promise<Card> {
    const newCard = this.repo.create();
    newCard.description = card.description;
    return this.repo.save(newCard);
  }
}
