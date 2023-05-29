import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// @Controller('books')
// export class BooksController {
//   constructor(private readonly databaseService: DatabaseService) {}

//   @Get()
//   async getAllBooks(): Promise<any[]> {
//     return this.databaseService.getAllBooks();
//   }
// }
