// Importando a biblioteca de requisições
import {Request, Response} from "express";
import { ListUserService } from "../../service/user/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService()
        const users = await listUserService.execute();
    return response.json(users);
  }
}

export {ListUserController}