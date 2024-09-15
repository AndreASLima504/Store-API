import { Request, Response } from 'express';
import { AuthenticateUserService } from "../service/AuthenticationUserService";


class AuthenticateUserController {
    async authenticateUser(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const res = await authenticateUserService.authenticateUser({
            email,
            password
        });

        return response.json({token: res.token, expiration: res.exp});
    }

    // async verifyToken(request: Request, response: Response){
    //     const token = request.headers.authorization.split(' ')[1];

    //     console.log(token)
    //     const authenticateUserService = new AuthenticateUserService()
    //     const res = await authenticateUserService.verifyToken(token)
        
    //     return res
    // }
}

export { AuthenticateUserController };