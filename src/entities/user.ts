import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Client } from "./client";
import { Sale } from "./sale";
import { Profile } from "./profile";

@Entity("user")
class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;
    @Column()
    name!: string;
    @Column()
    email!: string;
    @Column()
    admin!: boolean;
    @Column()
    password!: string;
    @Column({ nullable: true})
    clientId: string;
    @Column({ nullable: true})
    profileId: string;

    @ManyToOne(() => Client, (client) => client.users, { nullable: true})
    @JoinColumn({name: "clientId"})
    client = Client
    
    @ManyToOne(() => Profile, (profile) => profile.users, { nullable: true})
    @JoinColumn({name: "profileId"})
    profile = Profile

    @OneToMany(() => Sale, (sale) => sale.user)
    sales!: Sale[]

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updated_at!: Date;
}

export { User }