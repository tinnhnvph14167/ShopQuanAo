import { ICategory } from "../types/product";
import instance from "./instance";


export const getOneCategories = (id: number | string) => {

    return instance.get("/categories/" + id);
}
export const getAllCategories = () => {
    return instance.get("/categories");
}