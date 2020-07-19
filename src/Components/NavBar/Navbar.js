import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarItem, setNavBarItem] = useState(1);
  const navBarItems = [
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
    {
      id: 4,
      name: "Sign In",
      link: "/signin",
    },
  ];
  return (
    <nav className="navbar-main">
      {navBarItems.map((item) => {
        return (
          <Link
            to={item.link}
            className={
              item.id === navbarItem ? "navbar-item-selected" : "navbar-item"
            }
            onClick={() => {
              setNavBarItem(item.id);
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
