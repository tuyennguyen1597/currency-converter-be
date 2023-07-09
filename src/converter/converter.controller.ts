import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { ConverterTransactionDTO } from 'src/dto/converter-transaction.dto';

@Controller('api/converter')
export class ConverterController {
    constructor(
        private readonly converterService: ConverterService
    ){}

    @Get()
    async getCurrencies() {
        try {
            return await this.converterService.getCurrencies()
        } catch (error) {
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('rate')
    async getCurrencyRate() {
        try {
            return await this.converterService.getCurrencyRate();
        } catch (error) {
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Post('save-transaction')
    async saveTransaction(@Body() createTransactionDTO: ConverterTransactionDTO) {
        try {
            return await this.converterService.saveTransaction(createTransactionDTO)
        } catch (error) {
            throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}