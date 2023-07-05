import { Controller, Get } from '@nestjs/common';
import { ConverterService } from './converter.service';

@Controller('api/converter')
export class ConverterController {
    constructor(
        private readonly converterService: ConverterService
    ){}

    @Get()
    async getCurrencyRate() {
        try {
            // return await this.converterService.getCurrencyRate();
            return await this.converterService.getCurrencies()
        } catch (error) {
            console.log(error)
        }
    }
}