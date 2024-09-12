// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { CreateClientService } from "../../service/client/CreateClientService";

// Clase que recebe e armazena os dados de um novo usuario
class CreateClientController {
    async handle(request: Request, response: Response) {
        const {name, email, cpf, address, phone } = request.body;
        console.log(name)
        console.log(email)
        console.log(cpf)
        console.log(address)
        console.log(phone)

        const client = 
    {
        name:name,
        email:email,
        cpf:cpf,
        address:address,
        phone:phone
    };
    const createClientService = new CreateClientService()
    const ret =  await createClientService.execute(client)
    return response.json(ret);
  }
}

export {CreateClientController}