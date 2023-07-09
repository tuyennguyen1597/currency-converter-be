import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ConverterTransactionDTO {
    @IsString()
    fromCurrency: string;

    @IsString()
    toCurrency: string;

    @IsNumber()
    @IsNotEmpty()
    fromAmount: number;

    @IsNumber()
    @IsNotEmpty()
    toAmount: number;
}

