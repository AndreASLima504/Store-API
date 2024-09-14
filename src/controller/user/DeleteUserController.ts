// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

// Clase que recebe e armazena os dados de um novo usuario
class DeleteUserController {
    async handle(request: Request, response: Response) {
    const id = request.params.id;

    const deleteUserService = new DeleteUserService()
    const ret =  await deleteUserService.execute(id)

    return response.json(ret)
  }
}

export {DeleteUserController}