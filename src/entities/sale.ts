import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Product } from "./product";
import { User } from "./user";
import { ProductToSale } from "./productToSale";

@Entity("sale")
class Sale{
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column({nullable: true})
    userId!: string;
    @Column()
    value!: number;

    @ManyToOne(() => User, (user) => user.sales, {nullable: true, onDelete: "SET NULL"})
    @JoinColumn({name: "userId"})
    user!: User

    @OneToMany(() => ProductToSale, (prodSale) => prodSale.sale, {onDelete: "CASCADE"})
    productToSale!: ProductToSale[]
    
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

}

export { Sale }