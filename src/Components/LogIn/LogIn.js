import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const onChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    console.log("success");
  };
  return (
    <div className="user-form-group_wrapper">
      {" "}
      <form action="/register" method="POST" onSubmit={(e) => onSubmit(e)}>
        <div className="user-form-group">
          <label className="user-label" for="userName">
            Email:{" "}
          </label>
          <input
            className="user-input"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="user-form-group">
          <label className="user-label" for="password">
            Password:{" "}
          </label>
          <input
            className="user-input"
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input className="login-register-btn" type="submit" value="Log in" />
      </form>
      <Link to="/register"> Register </Link>
    </div>
  );
}
