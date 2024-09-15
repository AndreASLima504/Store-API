import  { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("category")
class  Category {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column()
    name!: string;
    @Column()
    description!: string;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;

    // constructor() {
    //     if(!this.id){
    //         this.id = uuid();
    //     }
    // }
}
export { Category }