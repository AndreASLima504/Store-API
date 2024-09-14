import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/usersRepositories";

class DeleteUserService {
    async execute(id:any) {
        if (!id) {
            throw new Error("Id incorrect");
        }

        const usersRepository = getCustomRepository(UsersRepositories);

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

export { DeleteUserService };