// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { UpdateClientService } from "../../service/client/UpdateClientService";

// Clase que recebe e armazena os dados de um novo usuario
class UpdateClientController {
    async handle(request: Request, response: Response) {
    const {name, email, cpf, address, phone } = request.body;

        const id = request.params.id;

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
    const updateClientService = new UpdateClientService()
    const ret =  await updateClientService.execute(client)
    return response.json(ret);
  }
}

export {UpdateClientController}