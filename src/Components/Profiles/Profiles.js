import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
import { ProfileBackgroundDisplayDiv } from "../../Emotion styles/ProfileBackgroundDiv";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div css={ProfileBackgroundDisplayDiv}>
            <h1> Profiles </h1>
            <p>Browse other film viewers profiles</p>
            <div>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4 data-testid="No-Profiles-Header">No Profiles Found </h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
