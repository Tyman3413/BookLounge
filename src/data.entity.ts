import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column({ name: 'old_price' })
  oldPrice: string;

  @Column()
  author: string;

  @Column()
  pubhouse: string;

  @Column('text', { array: true })
  img: string[];
}
