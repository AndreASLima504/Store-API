import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity("client")
class Client{
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
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