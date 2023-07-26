import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import ListProduct from "./pages/admin/product/ListProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import {
  getAllProduct,
  deleteProduct,
  updateProduct,
  addProduct,
} from "./api/product";
import "./App.css";
import { ICategory, IProduct, IUser } from "./types/product";
import AddUser from "./pages/admin/users/AddUser";
import { IUsers, addUsers } from "./api/user";
import ListUser from "./pages/admin/users/listUser";
import Login from "./pages/admin/users/signin";
// import { addUser } from './api/auth'

// import ProductCategory from './pages/admin/product/ProductCategory';

function App() {
  const [Products, setProducts] = useState<IProduct[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<{
    [categoryId: string | number]: IProduct[];
  }>({});
  const [Users, setUsers] = useState<IUsers[]>([]);
  const navigate = useNavigate();

  //Products
  useEffect(() => {
    getAllProduct().then(({ data: { products } }) =>
      setProducts(products.data)
    );
  }, []);
  // console.log(products)

  const onhandleDelete = (id: number) => {
    deleteProduct(id).then(() =>
      setProducts(Products.filter((item: any) => item._id !== id))
    );
  };

  const onHandleAdd = (products: any) => {
    addProduct(products).then(() => setProducts([...Products, products.data]));
  };

  const onhandleUpdate = (products: any) => {
    updateProduct(products).then(() =>
      setProducts(
        Products.map((item: any) => (item.id == products._id ? products : item))
      )
    );
  };

  const addUser = async (users: any) => {
    await addUsers(users).then((res) => {
      if (res?.data?.accessToken) {
        alert("Bạn đã đăng kí thành công");
        navigate("/signin")
      }
    });
  };
  useEffect(() => {
    getAllProduct().then(({ data: { products } }) =>
      setProducts(products.data)
    );
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="signup" element={<AddUser onAddUser={addUser} />} />
          <Route path="signin" element={<Login onAddUser={addUser} />} />
        </Route>
        <Route path="admin">
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ListProduct products={Products} onRemove={onhandleDelete} />
              }
            />
            <Route path="add" element={<AddProduct onAdd={onHandleAdd} />} />
            <Route
              path=":_id/update"
              element={
                <UpdateProduct products={Products} onUpdate={onhandleUpdate} />
              }
            ></Route>
          </Route>
          Products
          {/* <Route path="users">
            <Route index element={<ListUser users={Users} />} />
          </Route> */}
          Users
        </Route>
      </Routes>
    </div>
  );
}

export default App;
