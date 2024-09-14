// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { CreateUserService } from "../../service/user/CreateUserService";

// Clase que recebe e armazena os dados de um novo usuario
class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, email, admin, password } = request.body;
        const user =
        
    {
        name:name,
        email:email,
        admin:admin,
        password:password
    };
    const createUserService = new CreateUserService()
    const ret =  await createUserService.execute(user)
    return response.json(ret);
  }
}
export {CreateUserController}