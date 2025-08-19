import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsOptional()
    @IsNumber()
    Id?: number;

    @IsOptional()
    @IsString()
    Title?: string;

    @IsOptional()
    @IsString()
    Description?: string;

    @IsOptional()
    @IsString()
    Estatus?: string;
}
