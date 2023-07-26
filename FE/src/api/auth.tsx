import { IUser } from "../types/product";
import instance from "./instance";

export const addUsers = (users : IUser) =>{
    return instance.post("/signup",users)
}