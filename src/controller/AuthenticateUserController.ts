import { Request, Response } from 'express';
import { AuthenticateUserService } from "../service/AuthenticationUserService";


class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const res = await authenticateUserService.execute({
            email,
            password
        });

        return response.json({token: res.token, expiration: res.exp});
    }
}

export { AuthenticateUserController };