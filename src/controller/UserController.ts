import { Request, Response } from "express";
import { UserService } from "../service/UserService";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

class UserController{

    // Inserir novo usuário
    async createUser(request: Request, response: Response) {
        const {name, email, admin, password, clientId} = request.body;
        const user =
        {
            name:name,
            email:email,
            admin:admin,
            password:password,
            clientId:clientId
        };
        const userService = new UserService()
        const ret =  await userService.createUser(user)
        return response.json(ret);
    }


    async listUsers(request: Request, response: Response) {
        const userService = new UserService()
        const users = await userService.listUsers();
        return response.json(users);
    }


    async updateUser(request: Request, response: Response) {
        const {name, email, admin, password, clientId } = request.body;
        const id = request.params.id;
        const user = 
    {
        id: id,
        name:name,
        email:email,
        admin:admin,
        password:password,
        clientId:clientId,
    };
    const userService = new UserService()
    const ret =  await userService.updateUser(user)
    return response.json(ret);
    }


    async deleteUser(request: Request, response: Response) {
        const id = request.params.id;
    
        const userService = new UserService()
        const ret =  await userService.deleteUser(id)
    
        return response.json(ret)
      }

}

export { UserController }