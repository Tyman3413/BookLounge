import { Module } from '@nestjs/common';
import { ScrapperController } from './scrapper.controller';
import { ScrapperService } from './scrapper.service';
import { DatabaseService } from 'src/database.service';

@Module({
  controllers: [ScrapperController],
  providers: [ScrapperService, DatabaseService],
})
export class ScrapperModule {}
