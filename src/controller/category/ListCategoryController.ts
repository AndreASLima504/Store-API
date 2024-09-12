// Importando a biblioteca de requisições
import {Request, Response} from "express";

// Clase que recebe e armazena os dados de um novo usuario
class ListCategoryController {
    async handle(request: Request, response: Response) {
        const category = [
    {
        name:"Roupa",
        description:"Roupas legais dahoras"
    },
    {
        name:"Canecas",
        description:"canecas iradas"
    }
];
    return response.json(category);
  }
}

export {ListCategoryController}