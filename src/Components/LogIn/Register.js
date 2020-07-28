import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="user-form-group_wrapper">
      {" "}
      <form className="register-form-group" action="/register" method="POST">
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
          <label className="user-label" for="email">
            Email:{" "}
          </label>
          <input className="user-input" type="text" id="email" name="email" />
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
      <Link to="/signin"> Log In </Link>
    </div>
  );
}
