import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { inputButton } from "../../Emotion styles/InputButton";

const postWrapper = css`
  width: 60%;
  background: white;
  margin: auto;
  margin-bottom: 1rem;
  padding: 1em;
`;

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div css={postWrapper}>
      <div
        css={css`
          padding-left: 15%;
        `}
      >
        <h3>New post:</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ text });
            setText("");
          }}
        >
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a Post"
            css={css`
              width: 80%;
            `}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <div>
            <input css={inputButton} type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
