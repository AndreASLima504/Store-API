import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./category";
import { Sale } from "./sale";

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
    @Column()
    categoryId!: string;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: "categoryId" })
    category: Category

    @ManyToMany((type) => Sale, (sale) => sale.productList, { cascade: true})
    @JoinTable()
    sales: Sale[]


    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}

export { Product }