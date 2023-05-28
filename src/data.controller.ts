import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('api/data')
export class DataController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async getData(): Promise<any[]> {
    const sql = 'SELECT * FROM books';
    const data = await this.databaseService.query(sql);
    return data;
  }
}
