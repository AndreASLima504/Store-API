import { IUserInterface } from "../../interface/IUserInterface";

    class UpdateUserService {
        async execute ({id, name, email, admin = false, password}: IUserInterface){
            if (!email) {
                throw new Error ("Email Incorrect");
            }
            if (!password){
                throw new Error ("Password Incorrect");
            }
            var vuser = {
                id: id, name: name, email: email, admin: admin, password: password
            }
            console.log("Registro atualizado com sucesso")
        }
    }
    export { UpdateUserService }