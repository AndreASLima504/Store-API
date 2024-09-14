// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";

// Clase que recebe e armazena os dados de um novo usuario
class UpdateUserController {
    async handle(request: Request, response: Response) {
        const {name, email, admin, password } = request.body;
        const id = request.params.id;
        const user = 
    {
        id: id,
        name:name,
        email:email,
        admin:admin,
        password:password
    };
    const updateuserService = new UpdateUserService()
    const ret =  await updateuserService.execute(user)
    return response.json(ret);
  }
}

export {UpdateUserController}