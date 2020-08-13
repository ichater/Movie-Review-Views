import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

export function LogIn({ login, isAuthenticated }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const onChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email + password);
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
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

LogIn.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LogIn);
