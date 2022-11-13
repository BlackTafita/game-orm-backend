/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Tag } from 'src/core/entities/tag.entity';
import { TagService } from './tag.service';

@Crud({
    model: {
        type: Tag,
    }
})
@Controller('tag')
export class TagController implements CrudController<Tag> {
    constructor(public service: TagService) {}
 }
