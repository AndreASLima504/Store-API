// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { CreateSaleService } from "../../service/sale/CreateSaleService";
// Clase que recebe e armazena os dados de um novo usuario
class CreateSaleController {
    async handle(request: Request, response: Response) {
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
    const createSaleService = new CreateSaleService()
    const ret =  await createSaleService.execute(sale)
    return response.json(ret);
  }
}

export {CreateSaleController}