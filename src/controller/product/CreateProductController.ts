// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

// Clase que recebe e armazena os dados de um novo usuario
class CreateProductController {
    async handle(request: Request, response: Response) {
        const {name, description, price, categoryId} = request.body;
        console.log(name)
        console.log(description)
        console.log(price)
        console.log(categoryId)

        const product = 
    {
        name:name,
        description:description,
        price:price,
        categoryId:categoryId
    };
    const createProductService = new CreateProductService()
    const ret =  await createProductService.execute(product)
    return response.json(ret);
  }
}

export {CreateProductController}