import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="user-form-group_wrapper">
      {" "}
      <form action="/register" method="POST">
        <div className="user-form-group">
          <label className="user-label" for="userName">
            User Name:{" "}
          </label>
          <input
            className="user-input"
            type="text"
            id="userName"
            name="userName"
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
          />
        </div>
        <div className="login-register-btn" type="submit">
          Register
        </div>
      </form>
      <Link to="/register"> Register </Link>
    </div>
  );
}
