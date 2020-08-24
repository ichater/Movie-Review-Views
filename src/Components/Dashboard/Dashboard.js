import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import FilmQuotes from "./FilmQuotes";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const filmQuoteDisplay = (profile) => {
    return profile.filmQuotes > 0 ? (
      <FilmQuotes filmQuotes={profile.filmQuotes} />
    ) : (
      <p>No film Quotes to Display</p>
    );
  };

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="create-profile-form-wrapper">
      <h1> Dashboard </h1>
      <p>
        <i className="fas fa-user"></i> Welcome {user && user.username}
      </p>
      {profile ? filmQuoteDisplay(profile) : null}
      <div onClick={() => deleteAccount()}>Delete profile</div>
      {profile !== null ? (
        <>
          <DashboardActions />{" "}
        </>
      ) : (
        <div>
          {" "}
          <p>You have not yet set up a profile, Please add some info</p>
          <Link to="/createprofile"> Create Profile </Link>
        </div>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
