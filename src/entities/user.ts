import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Client } from "./client";
import { Sale } from "./sale";

export enum StringEnum {
    ADMIN = "admin",
    DEFAULT = "operador"
}

@Entity("user")
class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column()
    name!: string;
    @Column()
    email!: string;

    @Column()
    password!: string;
    @Column({type: "enum", enum: StringEnum, default: [StringEnum.DEFAULT] })
    role: StringEnum;

    @ManyToOne(() => Client, (client) => client.users, { nullable: true, onDelete: "SET NULL"})
    @JoinColumn({name: "clientId"})
    client = Client

    @OneToMany(() => Sale, (sale) => sale.user)
    sales!: Sale[]

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updated_at!: Date;
}

export { User }