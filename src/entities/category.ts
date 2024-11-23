import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Product } from "./product";
import { Store } from "./store";

@Entity("category")
class  Category {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column()
    name!: string;
    @Column()
    description!: string;
    
    @OneToMany(() => Product, (product) => product.category)
    @JoinColumn({ name: "categoryId" })
    products: Product[]

    @OneToMany(() => Store, (store) => store.category)
    @JoinColumn({ name: "categoryId" })
    stores: Product[]
    
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}
export { Category }