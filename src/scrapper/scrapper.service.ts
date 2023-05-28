import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ScrapperService {
  async getData(num: string = '1') {
    const URL = `https://www.labirint.ru/genres/1852/?page=${num}`;

    const browser = await puppeteer.launch({
      headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });

    const results = await page.evaluate(() => {
      const propertyList = [];

      document.querySelectorAll('.genres-carousel__item').forEach((z) => {
        let tempImgList = [];

        z.querySelectorAll('.genres-carousel__item').forEach((x) => {
          if (x.querySelector('img').src)
            tempImgList.push(x.querySelector('img').src);
        });

        const data = {
          title: z
            .querySelector(
              '#catalog > div > div.content-block-outer > div > div.products-row-outer.responsive-cards > div > div:nth-child(n) > div > div.product-cover > a',
            )
            ?.textContent.trim(),
          price: z
            .querySelector(
              '#catalog > div > div.content-block-outer > div > div.products-row-outer.responsive-cards > div > div:nth-child(n) > div > div.product-cover > div > div.price-label > div > div > span.price-val > span',
            )
            ?.textContent.trim(),
          old_price: z
            .querySelector(
              '#catalog > div > div.content-block-outer > div > div.products-row-outer.responsive-cards > div > div:nth-child(n) > div > div.product-cover > div > div.price-label > div > div > span.price-old > span',
            )
            ?.textContent.trim(),
          author: z
            .querySelector(
              '#catalog > div > div.content-block-outer > div > div.products-row-outer.responsive-cards > div > div:nth-child(n) > div > div.product-author > a > span',
            )
            ?.textContent.trim(),
          pubhouse: z
            .querySelector(
              '#catalog > div > div.content-block-outer > div > div.products-row-outer.responsive-cards > div > div:nth-child(n) > div > div.product-pubhouse > a.product-pubhouse__series',
            )
            ?.textContent.trim(),
          img: tempImgList,
        };
        propertyList.push(data);
      });

      return propertyList;
    });
    console.log(`getData results: `, results);
    await browser.close();
    return results;
  }
}
