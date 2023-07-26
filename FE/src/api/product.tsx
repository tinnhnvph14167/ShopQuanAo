import { IProduct } from "../types/product";
import instance from "./instance";
export const getAllProduct = () => {
    return instance.get("/products");
}

export const getOneProduct = (id: number | string) => {

    return instance.get("/products/" + id);
}

export const deleteProduct = (id: number) => {

    return instance.delete("/products/" + id);
}

export const addProduct = (products: IProduct) => {

    return instance.post("/products", products)
}

export const updateProduct = (products: IProduct) => {
    return instance.put("/products/" + products._id, products)
}

export const getAllProductsByCategory = (categoryId: string) => {
    return instance.get('/products', { params: { category: categoryId } });
};