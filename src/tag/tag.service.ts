/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tag } from 'src/core/entities/tag.entity';

@Injectable()
export class TagService extends TypeOrmCrudService<Tag> {
    constructor(@InjectRepository(Tag) repo) {
        super(repo);
    }
 }
