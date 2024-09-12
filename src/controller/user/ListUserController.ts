// Importando a biblioteca de requisições
import {Request, Response} from "express";

// Clase que recebe e armazena os dados de um novo usuario
class ListUserController {
    async handle(request: Request, response: Response) {
        const users = [
    {
        name:"Guilherme",
        email:"emailchato@yahoo.com.br",
        admin:false,
        password:"password"
    },
    {
        name:"João",
        email:"emaillegal@ordodev.com",
        admin:true,
        password:"@&8nD93nf74H7n%&"
    }
];
    return response.json(users);
  }
}

export {ListUserController}