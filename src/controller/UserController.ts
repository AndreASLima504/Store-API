import { Request, Response } from "express";
import { CreateUserService } from "../service/user/CreateUserService";
import { ListUserService } from "../service/user/ListUserService";
import { UpdateUserService } from "../service/user/UpdateUserService";
import { DeleteUserService } from "../service/user/DeleteUserService";
// import { UserService } from "../../service/user/UserService";

class UserController{

    // Inserir novo usuário
    async createUser(request: Request, response: Response) {
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


    async listUsers(request: Request, response: Response) {
        const listUserService = new ListUserService()
        const users = await listUserService.execute();
    return response.json(users);
    }


    async updateUser(request: Request, response: Response) {
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


    async deleteUser(request: Request, response: Response) {
        const id = request.params.id;
    
        const deleteUserService = new DeleteUserService()
        const ret =  await deleteUserService.execute(id)
    
        return response.json(ret)
      }

}

export { UserController }