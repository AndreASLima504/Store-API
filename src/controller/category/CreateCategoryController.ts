// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

// Clase que recebe e armazena os dados de um novo usuario
class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const {name, description } = request.body;
        console.log(name)
        console.log(description)

        const category = 
    {
        name:name,
        description:description
    };
    const createCategoryService = new CreateCategoryService()
    const ret =  await createCategoryService.execute(category)
    return response.json(ret);
  }
}

export {CreateCategoryController}