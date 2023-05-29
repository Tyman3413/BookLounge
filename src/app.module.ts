import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperModule } from './scrapper/scrapper.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Books } from './data.entity';
import { DatabaseService } from './database.service';
import { DataController } from './data.controller';
import { BooksController } from './books.controller';
const settings = require('../ormconfig.json');

@Module({
  imports: [
    ScrapperModule,
    TypeOrmModule.forRoot(settings),
    TypeOrmModule.forFeature([Books]),
  ],
  controllers: [AppController, DataController, BooksController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
