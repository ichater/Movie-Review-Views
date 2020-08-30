import React from "react";
import { Link } from "react-router-dom";

const AuthLinks = ({ navbarItem, setNavBarItem, logout }) => {
  return (
    <>
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
    </>
  );
};

//  connect whatever compenet you give me to the redux store using whatever maptStatetoProps says
export default AuthLinks;
