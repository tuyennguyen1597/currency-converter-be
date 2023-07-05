import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { map } from 'rxjs';
import { ConverterRequestDTO } from 'src/dto/converter-request.dto';

@Injectable()
export class ConverterService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    async getCurrencies() {
        try {
            const URL = `${process.env.URL}/currencies.json`
            const response = await this.httpService.get(URL, {
                params: {
                    'app_id': process.env.APP_ID
                }
            }).pipe(map(response => response.data)).toPromise();
            return Object.keys(response);
        } catch (error) {
            console.log(error)
        }
    }

    async getCurrencyRate() {
        try {
            const URL = `${process.env.URL}/latest.json`
            const response = await this.httpService.get(URL, {
                params: {
                    'app_id': process.env.APP_ID
                }
            }).pipe(map(response => response.data)).toPromise();
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async calculateCurrencyTransfer(request: ConverterRequestDTO) {
        const rates = await this.getCurrencyRate();
        let convertedRate: number;

        if (request.from === 'USD') {
            convertedRate = rates.rates[request.to];
        } else if (request.to === 'USD') {
            convertedRate = (1 / rates["rates"]["USD"]) * request.amount;
        } else {
            const fromToUSD = (1 / rates["rates"]["USD"]) * request.amount;
            convertedRate = fromToUSD / rates["rates"][request.to];
        }
    }
}