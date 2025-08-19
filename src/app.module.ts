import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [BooksModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
