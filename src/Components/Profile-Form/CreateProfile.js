import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateProfile = (props) => {
  const [formDate, setFormData] = useState();
  return (
    <div className="create-profile-form-wrapper">
      <form>
        <h3 className="profile-input-header">About you</h3>
        <div className="profile-form-group">
          <label className="profile-label">Location:</label>
          <input typx="text" className="profile-input"></input>
        </div>
        <div className="profile-form-group">
          <label className="profile-label">Description:</label>
          <textarea className="profile-input" rows="5" cols="50" />
        </div>
        <div className="profile-form-group">
          <label className="profile-label">Likes About Movies:</label>
          <textarea className="profile-input" rows="5" cols="50" />
        </div>
      </form>
      <form>
        <h3 className="profile-input-header">Add a Film Quote</h3>
        <div className="profile-form-group">
          <label label className="profile-label">
            Film
          </label>
          <input className="profile-input" />
        </div>
        <div className="profile-form-group">
          <label label className="profile-label">
            Quote
          </label>
          <input className="profile-input" />
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
