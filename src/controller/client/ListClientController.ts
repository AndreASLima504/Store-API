// Importando a biblioteca de requisições
import {Request, Response} from "express";

// Clase que recebe e armazena os dados de um novo usuario
class ListClientController {
    async handle(request: Request, response: Response) {
        const client = [
    {
        name:"Joao",
        email:"joao@gmail.com",
        cpf:"234.434.555-97",
        address:"Maria Fernanda Diana Marmora, 420",
        phone:"40028922"
    },
    {
        name:"Guilherme",
        email:"gui@gmail.com",
        cpf:"873.346.196-09",
        address:"Major Ribeiro Dahora, 837",
        phone:"40028922"
    }
];
    return response.json(client);
  }
}

export {ListClientController}