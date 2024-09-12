import { IUserInterface } from "../../interface/IUserInterface";
import { hash } from "bcryptjs";

    class CreateUserService {
        async execute ({ name, email, admin = false, password}: IUserInterface){
            if (!email) {
                throw new Error ("Email Incorrect");
            }
            if (!password){
                throw new Error ("Password Incorrect");
            }
            const passwordHash = await hash (password, 8);
            console.log(passwordHash)
            var vuser = {
                id: 1, name: name, email: email, admin: admin, password: password
            }
            console.log("Registro incluido com sucesso")
        }
    }
    export { CreateUserService }