/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Theme } from 'src/core/entities/theme.entity';
import { ThemeService } from './theme.service';

@Crud({
    model: {
        type: Theme,
    }
})
@Controller('theme')
export class ThemeController implements CrudController<Theme> {
    constructor(public service: ThemeService) {}
 }
