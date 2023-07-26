import instance from "./instance";

interface IUser {
    _id: string,
    name?: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface IUsers {
    _id?: number | string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}
export const addUsers = (users: IUser) => {
    return instance.post("/signup", users)
}

export const logInUser = (users: IUsers) => {
    return instance.post("/signin", users)
}
