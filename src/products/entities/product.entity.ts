import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column({ unique: true })
  productName: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'float' })
  rating: number;

  @Column({ type: 'float' })
  discount: number;

  @Column()
  productImage: string;
}
