/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeORMError } from 'typeorm';

@Module({
    imports: [],
    controllers: [],
    providers: [TypeORMError],
})
export class CoreModule { }
