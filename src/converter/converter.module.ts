import { Module } from '@nestjs/common';
import { ConverterController } from './converter.controller';
import { ConverterService } from './converter.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'src/model/transaction.entity';

@Module({
    imports: [HttpModule, TypeOrmModule.forFeature([Transaction])],
    controllers: [ConverterController],
    providers: [ConverterService],
})
export class ConverterModule {};