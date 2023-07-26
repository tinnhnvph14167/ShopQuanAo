import React from "react";
import { Button, Form, Input, Image } from "antd";
import SideMenu from "../../../component/SideMenu";
import { IProduct } from "../../../types/product";
import { IUser } from "../../../types/product";
import { useEffect, useState } from "react";
import { IUsers, addUsers, logInUser } from "../../../api/user";
import { useNavigate } from "react-router-dom";

interface Props {
  onAddUser: (users: IUsers) => void;
}

const Login = ({ onAddUser }: any) => {
  const [Users, setUsers] = useState<IUsers>({});
  const navigate = useNavigate();

  const onhadleChane = (e: any) => {
    const { name, value } = e.target;

    setUsers({
      ...Users,
      [name]: value,
    });
  };
  const onhadleSubmit = async (e: any) => {
    e.preventDefault();
    await logInUser(Users).then((res) => {
      if (res?.data?.accessToken) {
       console.log("token",res.data?.accessToken)
        localStorage.setItem('token', res.data?.accessToken);
        alert("Bạn đã đăng nhập thành công");
        navigate("/admin")
      }
    });
  };

  return (
    <div>
      <form onSubmit={onhadleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            //   defaultValue={Users}
            onChange={onhadleChane}
          />
          {/* <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="Password"
            onChange={onhadleChane}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* {Users} */}
    </div>
  );
};

export default Login;
