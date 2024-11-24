import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Category } from "./category";
import { Sale } from "./sale";
import { ProductToSale } from "./productToSale";

@Entity("product")
class  Product {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column()
    name!: string;
    @Column()
    description!: string;
    @Column()
    price!: number;
    @Column({nullable: true})
    categoryId!: string;

    @ManyToOne(() => Category, (category) => category.products, {nullable: true, onDelete: "SET NULL"})
    @JoinColumn({ name: "categoryId" })
    category: Category

    @OneToMany(() => ProductToSale, (prodSale) => prodSale.product,{ onDelete: "CASCADE"} )
    productToSale!: ProductToSale[]

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}

export { Product }