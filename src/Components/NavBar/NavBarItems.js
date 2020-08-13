import React from "react";

export const navBarItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Movie Search",
    link: "/moviesearch",
  },
  {
    id: 3,
    name: "User Search",
    link: "/users",
  },
  //   {
  //     id: 4,
  //     name: "Sign In",
  //     link: "/signin",
  //   },
  //   {
  //     id: 5,
  //     name: "Register",
  //     link: "/register",
  //   },
];

export const guestLinks = [
  {
    id: 4,
    name: "Sign In",
    link: "/signin",
  },
  {
    id: 5,
    name: "Register",
    link: "/register",
  },
];

export const authLinks = ({ logout }) => {
  return (
    <div className="navbar-item">
      {" "}
      <a onClick={logout} href="#!">
        <i className="fas fa-sign-out-alt"></i>{" "}
        <span className="hide-sm">Log Out</span>
      </a>
    </div>
  );
};
