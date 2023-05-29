import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('booksdb')
export class BooksController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async getAllBooks(): Promise<any[]> {
    return this.databaseService.getAllBooks();
  }
}
