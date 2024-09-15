import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("sale")
class Sale{
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column()
    userId!: string;
    @Column()
    productId!: string;
    @Column()
    clientId!: string;
    @Column()
    quantity!: number;
    @Column()
    value!: number;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

}

export { Sale }