import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { username, _id },
    description,
    filmQuotes,
    likesAboutMovies,
  },
}) => {
  return (
    <div>
      {" "}
      <div>{username}</div>
      <Link to={`/profile/${_id}`}> View Profile </Link>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
