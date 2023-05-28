import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperModule } from './scrapper/scrapper.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Books } from './data.entity';
const settings = require('../ormconfig.json');

@Module({
  imports: [
    ScrapperModule,
    TypeOrmModule.forRoot(settings),
    TypeOrmModule.forFeature([Books]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
