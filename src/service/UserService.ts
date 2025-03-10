import { IUserRequest } from "../interface/IUserRequest";
import { hash } from "bcryptjs";
import { UserRepositories } from "../repositories/userRepositories";
import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/clientRepositories";

class UserService{
    async createUser({ name, email, password, clientId }: IUserRequest) {
        if (!email) {
          throw new Error("Email incorrect");
        }
        if (!password) {
          throw new Error("Password incorrect");
        }

        var bcrypt = require('bcryptjs');
        var salt = bcrypt.genSaltSync(10);
        var passwordHash = bcrypt.hashSync(password, salt);
    
        const usersRepository = getCustomRepository(UserRepositories);
        const clientRepository = getCustomRepository(ClientRepositories);

        let client = null
        if(clientId != null){
            const clientExists = clientRepository.findOne({id: clientId})

            if(clientExists){
                client = clientExists
            }else{
                throw new Error ("Client does not exist")
            }
        }
        const user = usersRepository.create(
        {
            name,
            email,
            password: passwordHash,
            client: client,
        });
        await usersRepository.save(user);  
        return user;
    }


    async listUsers() {
        const usersRepositories = getCustomRepository(UserRepositories);
        const users = await usersRepositories
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.client", "client")
        .select([
            "user.id AS id",
            "user.name AS name",
            "user.email AS email",
            "user.role AS role",
            "user.clientId AS clientId",
            "client.name AS clientName",
        ])
        // .addSelect("category.name", "categoryName") // Define um alias personalizado para o nome da categoria
        .getRawMany();
        return users
    }


    async updateUser({id, name, email, password, clientId, role}: IUserRequest){
        if (!email) {
            throw new Error ("Email Incorrect");
        }
        if (!password){
            throw new Error ("Password Incorrect");
        }
        const passwordHash = await hash(password, 8);
        const usersRepository = getCustomRepository(UserRepositories);
        
        const user = await usersRepository.findOne({
            id,
        });
        
        if(!user) {
            throw new Error("User does not exist");
        }

        let client = null
        const clientRepository = getCustomRepository(ClientRepositories);
        if(clientId != null){
            const clientExists = await clientRepository.findOne({id: clientId})
            
            if(clientExists){
                client = clientExists
            }else{
                throw new Error ("Client does not exist")
            }
        }

        user.name=name
        user.email=email
        user.password=passwordHash
        user.client=client
        user.role=role


        const res = await usersRepository.save(user)
        return res
    }


    async deleteUser(id:any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        const usersRepository = getCustomRepository(UserRepositories);

        const user = await usersRepository.findOne({
            id,
        });

        if (!user){
            throw new Error("User does not exist");
        }

        await usersRepository.delete(id);

        var messageDelete = {
            message: "Registro excluido com sucesso"
        }
        return messageDelete
    }
}

export {  UserService }