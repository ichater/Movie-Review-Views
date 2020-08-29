import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ProfileItem = ({
  profile: {
    user: { username, _id },
    filmQuotes,
    avatar,
  },
}) => {
  const profileWrapper = css`
    border: 1px solid black;
    margin-bottom: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &:hover {
      background-color: pink;
    }
  `;

  const profileQuotesWrapper = css`
    display: flex;
    flex-direction: column;
  `;

  const filmQuoteDisplay = (filmQuotes) => {
    return filmQuotes != null &&
      filmQuotes.length > 0 &&
      filmQuotes[0].film !== "" ? (
      <Fragment>
        <span>"{filmQuotes[0].quote}"</span>
        <span>{filmQuotes[0].film}</span>
      </Fragment>
    ) : (
      <Fragment>No Quotes to show</Fragment>
    );
  };

  const avatarDisplay = (avatar) => {
    return avatar != null
      ? avatar
      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  };

  return (
    <div>
      <Link css={profileWrapper} to={`/profile/${_id}`}>
        {" "}
        <img
          src={avatarDisplay(avatar)}
          alt="avatar"
          css={css`
            height: 50px;
          `}
        />
        <div>{username}</div>
        <div css={profileQuotesWrapper}>{filmQuoteDisplay(filmQuotes)}</div>
      </Link>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
