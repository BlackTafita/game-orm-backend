import { Controller, Get, Query, Res } from '@nestjs/common';
import { CardService } from '../card/card.service';
import { Card } from '../core/entities/card.entity';
import { Response } from 'express';

@Controller('game')
export class GameController {
  constructor(private cardsService: CardService) {}

  @Get('deck')
  async generateDeck(
    @Query('first') first: boolean,
    @Res() res: Response,
  ): Promise<Card[]> {
    const deck: Card[] = [];
    if (first) {
      const firstCard = await this.cardsService.findOne({ where: { id: 1 } });
      deck.push(firstCard);
    }
    const cards = await this.cardsService.getRandomCards();
    debugger;
    if (cards.length < 10) {
      while (true) {
        if (deck.length >= 10) {
          break;
        }
        const randNum = Math.floor(Math.random() * cards.length);
        deck.push(cards[randNum]);
      }
      res.send(deck);
    } else {
      res.send(cards);
    }

    return deck || cards;
  }
}
