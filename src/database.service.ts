// database.service.ts
import { Injectable } from '@nestjs/common';
import * as pgPromise from 'pg-promise';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private readonly db: pgPromise.IDatabase<any>;
  private pool: Pool;

  constructor() {
    const pgp = pgPromise();
    const connectionConfig = {
      host: 'localhost',
      port: 5432,
      //   username: 'postgres',
      user: 'postgres',
      password: 'admin',
      database: 'booklounge',
      synchronize: true,
    };
    this.db = pgp(connectionConfig);

    this.pool = new Pool({
      connectionString: 'postgres://postgre:admin@localhost:5432/booklounge',
    });
  }

  async saveDataToDatabase(data: any[]) {
    try {
      await this.db.none(
        'CREATE TABLE IF NOT EXISTS books (title text, price text, old_price text, author text, pubhouse text, img text[])',
      );

      // Здесь вы можете использовать цикл или пакетную вставку для сохранения данных в базе данных
      for (const item of data) {
        await this.db.none(
          'INSERT INTO books(title, price, old_price, author, pubhouse, img) VALUES($1, $2, $3, $4, $5, $6)',
          [
            item.title || '',
            item.price || '',
            item.old_price || '',
            item.author || '',
            item.pubhouse || '',
            item.img || '',
          ],
        );
      }

      console.log('Data saved to the database.');
    } catch (error) {
      console.error('Error saving data to the database:', error);
    }
  }

  async query(sql: string, params: any[] = []): Promise<any> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(sql, params);
      return result.rows;
    } finally {
      client.release();
    }
  }
}
