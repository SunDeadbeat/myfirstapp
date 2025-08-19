import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
    @IsOptional()
    @IsNumber()
    Id?: number;
    @IsOptional()
    @IsString()
    Title?: string;
    @IsOptional()
    @IsString()
    Author?: string;
    @IsOptional()
    @IsNumber()
    YearPublished?: number;
}
