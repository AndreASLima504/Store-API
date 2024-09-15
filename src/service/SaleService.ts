import { ISaleRequest } from "../interface/ISaleRequest";
import { SaleRepositories } from "../repositories/saleRepositories";
import { getCustomRepository } from "typeorm";


class SaleService{
    async createSale({userId, productId, clientId, quantity, value}: ISaleRequest){
        const saleRepositories = getCustomRepository(SaleRepositories)
        const sale = saleRepositories.create({
            userId,
            productId,
            clientId,
            quantity,
            value,
        })

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


    async updateSale({id, userId, productId, clientId, quantity, value}: ISaleRequest){
        const saleRepositories = getCustomRepository(SaleRepositories)
        
        const sale = await saleRepositories.findOne({
            id,
        });
        if(!sale){
            throw new Error("Sale not exists")
        }

        sale.userId = userId
        sale.productId = productId
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