import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import GuestNavDisplay from "./GuestLinks";
import AuthLinks from "./AuthLinks";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [navbarItem, setNavBarItem] = useState();

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
      name: "View Profiles",
      link: "/profiles",
    },
  ];

  const mainNavDisplay = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `;

  return (
    <nav className="navbar-main">
      <div css={mainNavDisplay}>
        {navBarItems.map((item) => {
          return (
            <Link
              key={item.id}
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
      </div>
      {!loading && (
        <Fragment>
          {isAuthenticated ? (
            <AuthLinks
              navbarItem={navbarItem}
              setNavBarItem={setNavBarItem}
              logout={logout}
              mainNavDisplay={mainNavDisplay}
            />
          ) : (
            <GuestNavDisplay
              navbarItem={navbarItem}
              setNavBarItem={setNavBarItem}
            />
            // guestNavDisplay(setNavBarItem, navbarItem)
          )}
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
