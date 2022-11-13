/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Theme } from 'src/core/entities/theme.entity';

@Injectable()
export class ThemeService extends TypeOrmCrudService<Theme> {
    constructor(@InjectRepository(Theme) repo) {
        super(repo);
    }
 }
