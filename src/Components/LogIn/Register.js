import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = registerData;

  const onChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passwords do not match");
    } else {
      console.log("success");
      // const newUser = { username, email, password };
      // try {
      //   const config = {
      //     headers: { "Content-Type": "Application/json" },
      //   };
      //   const body = JSON.stringify(newUser);
      //   const res = await axios.post(
      //     "http://localhost:5000/users/register",
      //     body,
      //     config
      //   );
      //   console.log(res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }
  };

  return (
    <div className="user-form-group_wrapper">
      {" "}
      <form
        className="register-form-group"
        action="/register"
        // method="POST"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="user-form-group">
          <label className="user-label" for="userName">
            Username:{" "}
          </label>
          <input
            className="user-input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="user-form-group">
          <label className="user-label" for="email">
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
        <div className="user-form-group">
          <label className="user-label" for="password">
            Confirm Password:{" "}
          </label>
          <input
            className="user-input"
            type="text"
            id="password2"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input className="login-register-btn" type="submit" value="Register" />
      </form>
      <Link to="/signin"> Log In </Link>
    </div>
  );
}
