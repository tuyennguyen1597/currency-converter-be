import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ConverterRequestDTO {
    @IsString()
    from: string;

    @IsString()
    to: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
}

