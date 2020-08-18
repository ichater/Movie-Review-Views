import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { navBarItems, guestNavDisplay, authLinks } from "./NavBarItems";

//{ auth: { isAuthenticated, loading }, logout }
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [navbarItem, setNavBarItem] = useState();

  const authLinks = () => {
    return (
      <>
        {" "}
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
      {!loading && (
        <Fragment>
          {isAuthenticated
            ? authLinks()
            : guestNavDisplay(setNavBarItem, navbarItem)}
        </Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

//  connect whatever compenet you give me to the redux store using whatever maptStatetoProps says
export default connect(mapStateToProps, { logout })(Navbar);
