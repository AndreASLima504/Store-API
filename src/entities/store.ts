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
    rating: number;
    @Column()
    isOfficial: boolean;
    @Column()
    inOperation: boolean;
    
    @ManyToOne(() => Category, (category) => category.stores)
    @JoinColumn({ name: "categoryId" })
    category: Category

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}
export {Store}