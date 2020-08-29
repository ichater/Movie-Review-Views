import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    likesAboutMovies: "",
  });

  const { location, description, likesAboutMovies, avatar } = formData;

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
          <label className="profile-label">Avatar (image address):</label>
          <input
            value={avatar}
            name="avatar"
            onChange={(e) => onChange(e)}
            type="text"
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
        <input
          type="submit"
          value="Update profile"
          className="profile-input-button"
        />
      </form>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
