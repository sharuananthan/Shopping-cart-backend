import {Entity,PrimaryColumn,Column} from "typeorm";

@Entity('users')
export class User{
    @PrimaryColumn()
    id:number;

    @Column({unique:true})
    name: string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string;
}