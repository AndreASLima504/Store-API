import { IClientInterface } from "../../interface/IClientRequest";

    class UpdateClientService {
        async execute ({ id, name, description, cpf, address, phone}: IClientInterface){
            var vuser = {
                id: id, name: name, description: description, cpf: cpf, address: address, phone: phone
            }
            console.log("Registro atualizado com sucesso")
        }
    }
    export { UpdateClientService }