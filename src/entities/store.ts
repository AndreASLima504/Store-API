import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Category } from "./category";
import { Sale } from "./sale";

@Entity("store")
class Store{
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column()
    name: string;
    @Column()
    address: string;
    @Column()
    description: string;
    @Column()
    isOfficial: boolean;
    @Column()
    inOperation: boolean;
    @Column({nullable: true})
    categoryId: string;

    @OneToMany(() => Sale, (sale) => sale.store, {nullable: true, onDelete: "CASCADE"})
    sales: Sale[];

    @ManyToOne(() => Category, (category) => category.stores, {nullable: true, onDelete: "SET NULL"})
    @JoinColumn({ name: "categoryId" })
    category: Category

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}
export {Store}