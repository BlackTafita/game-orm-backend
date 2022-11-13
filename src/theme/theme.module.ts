import { ThemeService } from './theme.service';
import { ThemeController } from './theme.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theme } from 'src/core/entities/theme.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Theme])],
    controllers: [
        ThemeController,
    ],
    providers: [
        ThemeService,
    ],
    exports: [
        ThemeService,
    ]
})
export class ThemeModule { }
