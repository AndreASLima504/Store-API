// Importando a biblioteca de requisições
import {Request, Response} from "express";

// Clase que recebe e armazena os dados de um novo usuario
class DeleteUserController {
    async handle(request: Request, response: Response) {
    const id = request.params.id;

    return response.json({message:"Registro apagado com sucesso."});
  }
}

export {DeleteUserController}