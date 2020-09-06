import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";
import { inputButton } from "../../Emotion styles/InputButton";

import { ProfileBackgroundDisplayDiv } from "../../Emotion styles/ProfileBackgroundDiv";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ProfileContent from "./ProfileContent";
import QuoteDisplay from "./QuoteDisplay";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  const canEditProfile = () => {
    return (
      auth.isAuthenticated &&
      auth.loading === false &&
      auth.user._id === profile.user._id
    );
  };

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <div css={ProfileBackgroundDisplayDiv}>
          <h3>{profile.user.username}</h3>
          <ProfileContent profile={profile} />
          <Link to="/profiles" css={inputButton}>
            Back
          </Link>
          {canEditProfile() && (
            <Fragment>
              <Link to="/edit-profile" css={inputButton}>
                Edit Profile
              </Link>{" "}
              <Link css={inputButton} to="/add-movie-quote">
                <i className="fas fa-graduation-cap"></i>Add Movie Quote
              </Link>
            </Fragment>
          )}
          <QuoteDisplay filmQuotes={profile.filmQuotes} />
        </div>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
