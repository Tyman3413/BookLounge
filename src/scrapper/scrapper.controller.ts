import { Controller, Get } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';

@Controller('scrapper')
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) {}

  @Get('data')
  async getPropertyList(): Promise<any[]> {
    const propertyList = await this.scrapperService.getData();
    return propertyList;
  }

  // @Get()
  // scrapperController() {
  //   return this.scrapperService.getData();
  // }
}
