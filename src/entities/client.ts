import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, OneToMany } from "typeorm";
import { User } from "./user";

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
    
    @OneToMany(() => User, (user) => user.client)
    users!: User[]


    @CreateDateColumn()
    createdAt!: Date
    @UpdateDateColumn()
    updatedAt!: Date
}

export { Client }