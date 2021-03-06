import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

function Register({ setAlert, register, isAuthenticated }) {
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
      setAlert("Passwords do not match", "danger");
    } else {
      register({ username, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/signin" />;
  }

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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  console.log("im in register");
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { setAlert, register })(Register);
