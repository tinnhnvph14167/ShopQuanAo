export interface IProduct {
    _id?: number | string,
    name: string,
    price: number,
    image: string,
    categoryId: string,
    description: string
}

export interface ICategory {
    _id?: number | string,
    name: string,

}

export interface IUser {
    _id?: number | string,
    name: string,
    email: string,
    password: number,
    confirmPassword: number,
    accessToken: string | number,
}

