import { getCustomRepository } from "typeorm";
import { IUserInterface } from "../../interface/IUserInterface";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/usersRepositories";

    class UpdateUserService {
        async execute ({id, name, email, admin = false, password}: IUserInterface){
            console.log(id)
            if (!email) {
                throw new Error ("Email Incorrect");
            }
            if (!password){
                throw new Error ("Password Incorrect");
            }
            const passwordHash = await hash(password, 8);
            const usersRepository = getCustomRepository(UsersRepositories);
            
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
    }
    export { UpdateUserService }