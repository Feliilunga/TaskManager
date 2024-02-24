import {Role} from "./role";

export interface User {
    id?: string;
    name?: string;
    identification?: string
    password?: string
    email?: string
    role?: Role
}
