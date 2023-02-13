import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    orderId:number;

    @Column()
    productId:number;
}
