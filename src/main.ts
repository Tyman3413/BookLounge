import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';
import { ScrapperService } from './scrapper/scrapper.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const scrapperService = app.get(ScrapperService);
  const data = await scrapperService.getData();

  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  });

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () =>
    console.log(`Application is running on http://localhost:${PORT}`),
  );
}
bootstrap();
