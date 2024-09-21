import { isUndefined } from "util";
import { Product } from "../entities/product";
import { ISaleRequest } from "../interface/ISaleRequest";
import { ProductRepositories } from "../repositories/productRepositories";
import { SaleRepositories } from "../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";


class SaleService{
    // Recebe lista de ids dos produtos em string[]
    async createSale({userId, products, clientId, quantity, value}: ISaleRequest){
        const saleRepositories = getCustomRepository(SaleRepositories)
        // Cria uma nova lista de product[]
        const productRepositories = getCustomRepository(ProductRepositories)
        const productList: Product[] = []
        // Itera na lista de ids, inserindo objetos Product na lista
        for (const id of products) {
            const product = await productRepositories.findOne({ id, });
            if(!product){
                continue
            }
            productList.push(product)
        }
        
        const sale = saleRepositories.create({
            userId,
            productList,
            clientId,
            quantity,
            value,
        })
        console.log(products)

        // Método que cria e salva tupla no banco
        await saleRepositories.save(sale);
        return sale;
    }


    async listSales(){
        const saleRepositories = getCustomRepository(SaleRepositories);
        const sales = await saleRepositories
        .createQueryBuilder("sale")
        .getMany()
        return sales
    }


    async updateSale({id, userId, products, clientId, quantity, value}: ISaleRequest){
        const saleRepositories = getCustomRepository(SaleRepositories)
        
        const sale = await saleRepositories.findOne({
            id,
        });
        if(!sale){
            throw new Error("Sale not exists")
        }

        const productRepositories = getCustomRepository(ProductRepositories)
        const productList: Product[] = []
        
        for (const id of products) {
            const product = await productRepositories.findOne({ id, });
            if(!product){
                continue
            }
            productList.push(product)
        }

        sale.userId = userId
        sale.productList = productList
        sale.clientId = clientId
        sale.quantity = quantity
        sale.value = value

        const newSale = await saleRepositories.update(id, sale)
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