import {Request, Response} from "express";
import { SaleService } from "../service/SaleService";

class SaleController {
    async createSale(request: Request, response: Response) {
        const {productId, clientId, userId, quantity, value} = request.body;
        console.log(productId)
        console.log(clientId)
        console.log(userId)
        console.log(quantity)
        console.log(value)

        const sale = 
        {
            userId:userId,
            productId:productId,
            clientId:clientId,
            quantity:quantity,
            value:value
        };
        const saleService = new SaleService()
        const ret =  await saleService.createSale(sale)
        return response.json(ret);
    }

    
    async listSales(request: Request, response: Response) {
        const saleService = new SaleService()

        const sale = await saleService.listSales();
        return response.json(sale);
    }

    
    async updateSale(request: Request, response: Response){
        const {productId, clientId, userId, quantity, value} = request.body;
        const id = request.params.id;

        const sale = 
        {
            id:id,
            userId:userId,
            productId:productId,
            clientId:clientId,
            quantity:quantity,
            value:value
        };
        const saleService = new SaleService()
        const ret =  await saleService.updateSale(sale)
        return response.json(ret);
    }


    async deleteSale(request: Request, response: Response){
        const id = request.params.id;
        const saleService = new SaleService();
        console.log("aaaa")

        const res = await saleService.deleteSale(id);
        return response.json(res);
    }
}

export { SaleController }