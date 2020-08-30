import React from "react";
import { Link } from "react-router-dom";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const guestLinks = [
  {
    id: 4,
    name: "Sign In",
    link: "/login",
  },
  {
    id: 5,
    name: "Register",
    link: "/register",
  },
];

const guestNavDisplayWrapper = css`
  margin-left: 50%;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const guestNavDisplay = ({ setNavBarItem, navbarItem }) => {
  return (
    <div css={guestNavDisplayWrapper}>
      {guestLinks.map((item) => {
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
    </div>
  );
};

export default guestNavDisplay;
