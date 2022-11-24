/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, UseFilters } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Theme } from 'src/core/entities/theme.entity';
import { TypeOrmFilter } from 'src/core/filters/type-orm.filter';
import { ThemeService } from './theme.service';

@Crud({
    model: {
        type: Theme,
    }
})
@Controller('theme')
@UseFilters(TypeOrmFilter)
export class ThemeController implements CrudController<Theme> {
    constructor(public service: ThemeService) {}
 }
