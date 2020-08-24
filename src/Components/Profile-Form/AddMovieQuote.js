import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMovieQuote } from "../../actions/profile";

const AddMovieQuote = ({ addMovieQuote, history }) => {
  const [formData, setFormData] = useState({
    film: "",
    quote: "",
  });

  const { film, quote } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <div className="create-profile-form-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMovieQuote(formData, history);
            console.log(formData);
          }}
        >
          <h3 className="profile-input-header">Add a Film Quote</h3>
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
              placeholder={quote}
              name="quote"
              onChange={(e) => onChange(e)}
              className="profile-input"
            />
          </div>
          <input
            type="submit"
            value="Add a quote"
            className="profile-input-button"
          />
          <Link to="/dashboard" className="profile-input-button">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

AddMovieQuote.propTypes = {
  addMovieQuote: PropTypes.func.isRequired,
};

export default connect(null, { addMovieQuote })(AddMovieQuote);
