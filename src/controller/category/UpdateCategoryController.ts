// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";
// Clase que recebe e armazena os dados de um novo usuario
class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const {name, description } = request.body;

        const id = request.params.id;

        console.log(name)
        console.log(description)

        const category = 
    {
        name:name,
        description:description
    };
    const updateCategoryService = new UpdateCategoryService()
    const ret =  await updateCategoryService.execute(category)
    return response.json(ret);
  }
}

export {UpdateCategoryController}