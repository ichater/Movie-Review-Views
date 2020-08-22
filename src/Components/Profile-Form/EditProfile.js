import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    likesAboutMovies: "",
    filmQuotes: {
      quote: "",
      film: "",
    },
  });

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      location: loading || !profile.location ? "" : profile.location,
      description: loading || !profile.description ? "" : profile.description,
      likesAboutMovies:
        loading || !profile.likesAboutMovies ? "" : profile.likesAboutMovies,
    });
  }, [loading]);

  const { location, description, likesAboutMovies, film, quote } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className="create-profile-form-wrapper">
      <form onSubmit={(e) => onSubmit(e)}>
        <h3 className="profile-input-header">About you</h3>
        <div className="profile-form-group">
          <label className="profile-label">Location:</label>
          <input
            value={location}
            name="location"
            onChange={(e) => onChange(e)}
            typx="text"
            className="profile-input"
          ></input>
        </div>
        <div className="profile-form-group">
          <label className="profile-label">Description:</label>
          <textarea
            value={description}
            name="description"
            onChange={(e) => onChange(e)}
            className="profile-input"
            rows="5"
            cols="50"
          />
        </div>
        <div className="profile-form-group">
          <label className="profile-label">Likes About Movies:</label>
          <textarea
            value={likesAboutMovies}
            name="likesAboutMovies"
            placeholder="Speak from the heart"
            onChange={(e) => onChange(e)}
            className="profile-input"
            rows="5"
            cols="50"
          />
        </div>
        <h3 className="profile-input-header">
          Add a Film Quote (Write logic seperating this from the above )
        </h3>
        <div className="profile-form-group">
          <label label className="profile-label">
            Film
          </label>
          <input
            value={film}
            placeholder={film}
            name="film"
            onChange={(e) => onChange(e)}
            className="profile-input"
          />
        </div>
        <div className="profile-form-group">
          <label label className="profile-label">
            Quote
          </label>
          <input
            value={quote}
            name="quote"
            onChange={(e) => onChange(e)}
            className="profile-input"
          />
        </div>
        <input
          type="submit"
          value="Submit all data(Add a quote)"
          className="profile-input-button"
        />
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
