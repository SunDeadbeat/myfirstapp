import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsOptional()
    @IsNumber()
    Id?: number;
    @IsString()
    @IsNotEmpty()
    Title: string;

    @IsString()
    @IsNotEmpty()
    Description: string;

    @IsString()
    @IsNotEmpty()
    Estatus: string;
}
