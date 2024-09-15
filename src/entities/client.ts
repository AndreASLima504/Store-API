import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("client")
class Client{
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column()
    name!: string
    @Column()
    description!: string;
    @Column()
    cpf!: string;
    @Column()
    address!: string;
    @Column()
    phone!: string;
    
    @CreateDateColumn()
    createdAt!: Date
    @UpdateDateColumn()
    updatedAt!: Date
}

export { Client }