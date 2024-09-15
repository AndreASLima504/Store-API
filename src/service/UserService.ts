import { IUserRequest } from "../interface/IUserRequest";
import { hash } from "bcryptjs";
import { UserRepositories } from "../repositories/userRepositories";
import { getCustomRepository } from "typeorm";

class UserService{
    async createUser({ name, email, admin = false, password }: IUserRequest) {
        if (!email) {
          throw new Error("Email incorrect");
        }
        if (!password) {
          throw new Error("Password incorrect");
        }
        const passwordHash = await hash(password, 8);
    
        const usersRepository = getCustomRepository(UserRepositories);
        const user = usersRepository.create(
        {
            name,
            email,
            admin,
            password: passwordHash,
        });
        await usersRepository.save(user);  
        return user;
    }


    async listUsers() {
        const usersRepositories = getCustomRepository(UserRepositories);
        const users = await usersRepositories
        .createQueryBuilder("user")
        .getMany()
        return users
    }


    async updateUser({id, name, email, admin = false, password}: IUserRequest){
        console.log(id)
        if (!email) {
            throw new Error ("Email Incorrect");
        }
        if (!password){
            throw new Error ("Password Incorrect");
        }
        const passwordHash = await hash(password, 8);
        const usersRepository = getCustomRepository(UserRepositories);
        
        const userAlreadyExists = await usersRepository.findOne({
            id,
        });
            if(!userAlreadyExists) {
            throw new Error("User not exists");
        }

        userAlreadyExists.name=name
        userAlreadyExists.admin=admin
        userAlreadyExists.password=passwordHash

        const user = await usersRepository.update(id, userAlreadyExists)
        return user
    }


    async deleteUser(id:any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        const usersRepository = getCustomRepository(UserRepositories);

        const userAlreadyExists = await usersRepository.findOne({
            id,
        });

        if (!userAlreadyExists){
            throw new Error("User not exists");
        }

        await usersRepository.delete(id);

        var messageDelete = {
            message: "Registro excluido com sucesso"
        }
        return messageDelete
    }
}

export {  UserService }