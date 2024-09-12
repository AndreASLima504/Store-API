// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { UpdateSaleService } from "../../service/sale/UpdateSaleService";

// Clase que recebe e armazena os dados de um novo usuario
class UpdateSaleController {
    async handle(request: Request, response: Response) {
        const {productId, clientId, userId, quantity, value} = request.body;

        const id = request.params.id;

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
        const updateSaleService = new UpdateSaleService()
        const ret =  await updateSaleService.execute(sale)
        return response.json(ret);
  }
}

export {UpdateSaleController}