import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-main">
      <Link to="/" className="navbar-item">
        {" "}
        Home{" "}
      </Link>
      <Link to="/moviesearch" className="navbar-item">
        {" "}
        Movie search{" "}
      </Link>
      <Link to="/users" className="navbar-item">
        {" "}
        User search{" "}
      </Link>
      <Link to="/signin" className="navbar-item">
        {" "}
        Sign In{" "}
      </Link>
    </nav>
  );
}
