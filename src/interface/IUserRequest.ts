import { Client } from "../entities/client";
import { StringEnum } from "../entities/user";

interface IUserRequest {
    id?: string;
    name: string;
    email:string;
    password: string;
    clientId?: string;
    role:StringEnum
}

    export{ IUserRequest }