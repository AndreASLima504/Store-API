// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";

// Clase que recebe e armazena os dados de um novo usuario
class UpdateProductController {
    async handle(request: Request, response: Response) {
    const {name, description, price, categoryId} = request.body;

        const id = request.params.id;

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
    const updateProductService = new UpdateProductService()
    const ret =  await updateProductService.execute(product)
    return response.json(ret);
  }
}

export {UpdateProductController}