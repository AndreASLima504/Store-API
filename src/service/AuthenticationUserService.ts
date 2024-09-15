import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthenticateRequest } from "../interface/IAuthenticateRequest";

// ES Modules
import { lastDayOfMonth } from 'date-fns';

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){

    const passwordHash = await hash("umc24", 8);
    const passwordMatch = await compare(password, passwordHash);

    if (!passwordMatch) {
        throw new Error ("Senha incorreta");
    }

    //Gerar token
    const token = sign(
        {
            email: email, 
        },
        "UMC-EngSoftware-2024",
        {
            subject: ("others"),
            expiresIn: "1d",
        }
    );

    var jwt = require('jsonwebtoken');
    var tokenBase64 = token;
    const tokenInfo = jwt.decode(tokenBase64);
    const exp = tokenInfo.exp;
    const iat = tokenInfo.iat;

    const sec = exp - iat;
    const min = sec / 60;
    const hour = min / 60;

    return "access_token: " + token + " --- O token vai expirar em: " + hour + "h";

 }
}

export { AuthenticateUserService };