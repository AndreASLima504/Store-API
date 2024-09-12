// Importando a biblioteca de requisições
import {Request, Response} from "express";

// Clase que recebe e armazena os dados de um novo usuario
class ListProductController {
    async handle(request: Request, response: Response) {
        const product = [
    {
        name:"Moto",
        description:"carro de verdade",
        price:"R$ 10 pila",
        catogoryId:"1"
    },
    {
        name:"Carro",
        description:"moto de verdade",
        price:"R$ 12 pila",
        catogoryId:"2"
    }
];
    return response.json(product);
  }
}

export {ListProductController}