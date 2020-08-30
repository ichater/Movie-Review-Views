import React from "react";
import { Link } from "react-router-dom";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const AuthLinks = ({ navbarItem, setNavBarItem, logout, mainNavDisplay }) => {
  return (
    <div css={mainNavDisplay}>
      <Link
        to="/posts"
        className={
          navbarItem === "Posts" ? "navbar-item-selected" : "navbar-item"
        }
        onClick={() => {
          setNavBarItem("Posts");
        }}
      >
        {" "}
        Posts
      </Link>{" "}
      <Link
        to="/dashboard"
        className={
          navbarItem === "Dashboard" ? "navbar-item-selected" : "navbar-item"
        }
        onClick={() => {
          setNavBarItem("Dashboard");
        }}
      >
        <i className="fas fa-user"></i>{" "}
        <span className="hide-sm">Dashboard</span>
      </Link>
      <div className="navbar-item">
        {" "}
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Log Out</span>
        </a>
      </div>
    </div>
  );
};

//  connect whatever compenet you give me to the redux store using whatever maptStatetoProps says
export default AuthLinks;
