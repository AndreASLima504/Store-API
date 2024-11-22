import {Request, Response} from "express";
import { SaleService } from "../service/SaleService";

class SaleController {
    async createSale(request: Request, response: Response) {
        const {products, userId} = request.body;
        const sale = 
        {
            userId:userId,
            products:products,
        };
        const saleService = new SaleService()
        const ret =  await saleService.createSale(sale)
        return response.json(ret);
    }

    
    async listSales(request: Request, response: Response) {
        const saleService = new SaleService()
        const res = await saleService.listSales();
        console.log(res)
        const sales = response.json(res) 
        return sales
    }

    
    async updateSale(request: Request, response: Response){
        const {products, clientId, userId, quantity, value} = request.body;
        const id = request.params.id;

        const sale = 
        {
            id:id,
            userId:userId,
            products:products,
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

        const res = await saleService.deleteSale(id);
        return response.json(res);
    }
}

export { SaleController }