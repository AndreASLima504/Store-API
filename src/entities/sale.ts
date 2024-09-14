import  { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("sale")
class Sale{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    userId!: string;
    @Column()
    productId!: string;
    @Column()
    clientId!: string;
    @Column()
    quantity!: string;
    @Column()
    value!: string;

    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Sale }