import { isUndefined } from "util";
import { Product } from "../entities/product";
import { ISaleRequest } from "../interface/ISaleRequest";
import { ProductRepositories } from "../repositories/productRepositories";
import { SaleRepositories } from "../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";
import { ProductToSale } from "../entities/productToSale";
import { ProductToSaleRepositories } from "../repositories/productToSale";
import { StoreRepositories } from "../repositories/storeRepositories";


class SaleService{
    // Recebe lista de ids dos produtos em string[]
    async createSale({userId, products, storeId}: ISaleRequest){
        const saleRepositories = getCustomRepository(SaleRepositories)
        // Cria uma nova lista de product[]
        const productRepositories = getCustomRepository(ProductRepositories)
        const productToSaleRepositories = getCustomRepository(ProductToSaleRepositories)
        const storeRepositories = getCustomRepository(StoreRepositories)
        const productToSale: ProductToSale[] = []

        let store = null
        const storeExists = await storeRepositories.findOne({id: storeId})
        if(storeExists){
            store = storeExists
        }else{
            throw new Error ("Store does not exist")
        }
        const sale = saleRepositories.create({
            userId,
            productToSale,
            store:store,
            value: 0, 
        })
        

        // Itera na lista de ids, inserindo objetos Product na lista
        let saleFinalValue = 0

        for (const p of products) {
            const product = await productRepositories.findOne({ where: { id: p.productId } });
            if(!product){
                throw new Error("Error 404, product not found")
            }

            const subtotal = p.quantity * product.price
            
            const newProdToSale = productToSaleRepositories.create({
                saleId: sale.id,
                productId: p.productId,
                quantity: p.quantity,
                subtotal
            })
            saleFinalValue += subtotal
            productToSale.push(newProdToSale)
        }
        
        sale.value = saleFinalValue
        sale.productToSale = productToSale
        

        const saleId = (await saleRepositories.save(sale)).id;
        
        
        
        //Definindo e salvando tuplas da entidade intermediária        
        for(const item of productToSale){
            item.saleId = saleId
            await productToSaleRepositories.save(item)
        }
        return sale;
    }


    async listSales(){
        const saleRepositories = getCustomRepository(SaleRepositories);
        const sales = await saleRepositories
        .createQueryBuilder("sale")
        .getMany()
        return sales
    }


    async updateSale({id, userId, products, storeId}: ISaleRequest){
        const saleRepositories = getCustomRepository(SaleRepositories)
        const productToSaleRepositories = getCustomRepository(ProductToSaleRepositories)

        const sale = await saleRepositories.findOne({
            id,
        });
        if(!sale){
            throw new Error("Sale does not exist")
        }

        const productRepositories = getCustomRepository(ProductRepositories)
        const storeRepositories = getCustomRepository(StoreRepositories)
        const productToSale: ProductToSale[] = []
        
        let saleFinalValue = 0
        for (const p of products) {
            const product = await productRepositories.findOne({ where: { id: p.productId } });
            if(!product){
                continue
            }
            
            const subtotal = p.quantity * product.price
            const newProdToSale = productToSaleRepositories.create({
                saleId: sale.id,
                productId: p.productId,
                quantity: p.quantity,
                subtotal
            })
            saleFinalValue += subtotal
            productToSale.push(newProdToSale)
        }
        
        let store = null
        const storeExists = await storeRepositories.findOne({id: storeId})
        if(storeExists){
            store = storeExists
        }else{
            throw new Error ("Store does not exist")
        }
        
        sale.userId = userId
        sale.store = store
        sale.value = saleFinalValue

        for(const item of productToSale){
            item.saleId = id
            await productToSaleRepositories.save(item)
        }
        const newSale = await saleRepositories.save(sale)
        return newSale
    }


    async deleteSale(id:any){
        if(!id){
            throw new Error("Id incorrect")
        }
        const saleRepositories = getCustomRepository(SaleRepositories)
        
        const sale = await saleRepositories.findOne({
            id,
        })
        if(!sale){
            throw new Error("Sale does not exist")
        }

        saleRepositories.delete(id);
        var messageDelete = {
            message: "Registro excluido com sucesso"
        }
        return messageDelete
    }
}

export { SaleService }