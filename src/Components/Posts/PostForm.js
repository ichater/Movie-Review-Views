import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const { text, setText } = useState("");

  return (
    <div>
      <h3>New post:</h3>
      <form>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a Post"
          required
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
