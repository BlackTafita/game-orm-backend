/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Card } from 'src/core/entities/card.entity';
import { CardService } from './card.service';
import { FileInterceptor } from '@nestjs/platform-express';

import xlsx from 'node-xlsx';

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
      },
    },
  },
})
@Controller('card')
export class CardController implements CrudController<Card> {
  constructor(public service: CardService) {}

  @Post('xlsx')
  @UseInterceptors(FileInterceptor('file'))
  async createCardsFromFile(@UploadedFile() file: Express.Multer.File) {
    const worksheets = xlsx.parse(file.buffer);
    const worksheet = worksheets[0];
    const values: string[] = (worksheet.data as string[][])
      .slice(1)
      .reduce((acc: string[], e: string[]) => {
        acc.push(e[1]);
        return acc;
      }, []);

    for (const description of values) {
      const existing = await this.service.findOne({
        where: {
          description,
        },
      });
      if (!existing) {
        await this.service.create({ description });
      }
    }
  }
}
