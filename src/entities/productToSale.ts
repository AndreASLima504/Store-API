import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"
import { Sale } from "./sale" 
import { Product } from "./product" 

@Entity()
export class ProductToSale {
    @PrimaryColumn()
    productId!: string

    @PrimaryColumn()
    saleId!: string
    
    @Column()
    quantity!: number

    @Column()
    subtotal: number

    

    @ManyToOne(() => Sale, (sale) => sale.productToSale)
    sale: Sale

    @ManyToOne(() => Product, (product) => product.productToSale)
    product: Product
}