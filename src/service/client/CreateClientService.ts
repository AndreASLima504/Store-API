import { IClientRequest } from "../../interface/IClientRequest";

    class CreateClientService {
        async execute ({ name, description, cpf, address, phone}: IClientRequest){
            var vuser = {
                id: 1, name: name, description: description, cpf: cpf, address: address, phone: phone
            }
            console.log("Registro incluido com sucesso")
        }
    }
    export { CreateClientService }