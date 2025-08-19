import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<CreateBookDto[]> {
        const books: CreateBookDto[] = await this.prisma.books.findMany();

        if (!books) {
            throw new NotFoundException('No books found');
        }

        return books;
    }

    async findOne(Id: number): Promise<CreateBookDto | null> {
        const book: CreateBookDto | null = await this.prisma.books.findUnique({ where: { Id } });

        if (!book) {
            throw new NotFoundException('Book not found');
        }

        return book;
    }

    async create(book: CreateBookDto): Promise<CreateBookDto> {
        const createdBook = await this.prisma.books.create({ data: book });

        if (!createdBook) {
            throw new InternalServerErrorException('Error creating book');
        }

        return createdBook;
    }

    async update(Id: number, book: UpdateBookDto): Promise<UpdateBookDto> {
        const updatedBook = await this.prisma.books.update({ where: { Id }, data: book });

        if (!updatedBook) {
            throw new InternalServerErrorException('Error updating book');
        }

        return updatedBook;
    }
}
