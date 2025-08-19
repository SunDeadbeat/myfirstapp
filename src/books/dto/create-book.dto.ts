import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
    @IsOptional()
    @IsNumber()
    Id?: number;
    @IsString()
    @IsNotEmpty()
    Title: string;
    @IsString()
    @IsNotEmpty()
    Author: string;
    @IsNumber()
    @IsNotEmpty()
    YearPublished: number;
}
