import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { Product } from "./product";

@Entity("sale")
class Sale{
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column()
    userId!: string;
    @Column()
    clientId!: string;
    @Column()
    quantity!: number;
    @Column()
    value!: number;
    
    @ManyToMany((type) => Product, (product) => product.sales)
    productList!: Product[]

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

}

export { Sale }