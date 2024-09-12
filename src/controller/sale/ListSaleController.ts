// Importando a biblioteca de requisições
import {Request, Response} from "express";

// Clase que recebe e armazena os dados de um novo usuario
class ListSaleController {
    async handle(request: Request, response: Response) {
        const sale = [
    {
        productID:"123",
        clientID:"321",
        userID:"312",
        quantity:2,
        value:20.00
    },
    {
        productID:"725",
        clientID:"123",
        userID:"456",
        quantity:4,
        value:40.00
    }
];
    return response.json(sale);
  }
}

export {ListSaleController}