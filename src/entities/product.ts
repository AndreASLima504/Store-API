import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("product")
class  Product {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column()
    name!: string;
    @Column()
    description!: string;
    @Column()
    price!: number;
    @Column()
    categoryId!: string;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}

export { Product }