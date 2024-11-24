import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Category } from "./category";

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
    
    @ManyToOne(() => Category, (category) => category.stores, {nullable: true, onDelete: "SET NULL"})
    @JoinColumn({ name: "categoryId" })
    category: Category

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}
export {Store}