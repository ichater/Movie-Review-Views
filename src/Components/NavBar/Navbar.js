import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { navBarItems, guestLinks, authLinks } from "./NavBarItems";

//{ auth: { isAuthenticated, loading }, logout }
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [navbarItem, setNavBarItem] = useState();

  // const authLinks =()

  // const guestLinks=()

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
            ? navBarItems.push(guestLinks)
            : navBarItems.push(guestLinks)}
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
