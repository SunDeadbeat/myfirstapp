import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get('/')
    async findAll() {
        return await this.booksService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.booksService.findOne(id);
    }

    @Post('/')
    async create(@Body() book: CreateBookDto) {
        return await this.booksService.create(book);
    }

    @Post('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() book: UpdateBookDto,
    ) {
        return await this.booksService.update(id, book);
    }
}
