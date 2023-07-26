import React from "react";
import { Button, Form, Input, Image } from "antd";
import SideMenu from "../../../component/SideMenu";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../types/product";
import { IUser } from "../../../types/product";
import { useEffect, useState } from "react";

interface Props {
  onAddUser: (users: IUser) => void;
}

const AddUser = ({ onAddUser }: any) => {
  const [Users, setUsers] = useState<IUser[]>([]);

  const onhadleChane = (e: any) => {

    const { name, value } = e.target;

    setUsers({
      ...Users,
      [name]: value,
    });
  };

  
  const onhadleSubmit = (e: any) => {
    e.preventDefault();
    onAddUser(Users);
  };

  return (
    <div>
      <form onSubmit={onhadleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            //   defaultValue={Users}
            onChange={onhadleChane}
          />
          {/* <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div> */}
        </div>
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            onChange={onhadleChane}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
