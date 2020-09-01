import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { avatarDisplay } from "../../Utilities/AvatarDisplay";
import { addLike, removeLike } from "../../actions/post";
import { deleteButton } from "../../Emotion styles/InputButton";

const postWrapper = css`
  width: 60%;
  background: white;
  margin: auto;
  margin-bottom: 1rem;
  padding: 1em;
`;

const avatarNameWrapper = css`
  display: flex;
  flex-direction: column;
  width: content;
  width: 10%;

  box-sizing: border-box;
`;

const textWrapper = css`
  width: 80%;
  margin-left: 5%;
  border-radius: 25px;
  border: 1px solid black;
  box-sizing: border-box;
  position: relative;
  padding: 1em;
  height: auto;
`;

const likeBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 25%;
  &:hover {
    cursor: pointer;
  }
`;
const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, likes, comments, user, date, avatar },
}) => {
  return (
    <div css={postWrapper}>
      {" "}
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <div css={avatarNameWrapper}>
          <img
            src={avatarDisplay(avatar)}
            alt="avatar"
            css={css`
              width: 100px;
              border-radius: 25px;
            `}
          />
          <span>{name}</span>
        </div>
        <div css={textWrapper}>{text}</div>
      </div>
      <div>
        Date: <Moment format="DD/MM/YYYY">{date}</Moment>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 10px;
        `}
      >
        <div css={likeBtn}>
          <i className="fas fa-thumbs-up" onClick={(e) => addLike(_id)} />{" "}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </div>
        <div css={likeBtn}>
          <i className="fas fa-thumbs-down" onClick={(e) => removeLike(_id)} />
        </div>
      </div>
      <Link to={`/posts/${_id}`}>
        {" "}
        Discussion:{" "}
        {comments.length > 0 && <span>We have comments to work with</span>}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <div>
          <div css={deleteButton}> X </div>
        </div>
      )}
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
