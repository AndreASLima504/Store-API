import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Product } from "./product";
import { User } from "./user";
import { ProductToSale } from "./productToSale";

@Entity("sale")
class Sale{
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column()
    userId!: string;
    @Column()
    value!: number;
    
    // @ManyToMany(() => Product, (product) => product.sales)
    // productList!: Product[]

    @ManyToOne(() => User, (user) => user.sales)
    @JoinColumn({name: "userId"})
    user!: User

    @OneToMany(() => ProductToSale, (prodSale) => prodSale.sale)
    productToSale!: ProductToSale[]
    
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

}

export { Sale }