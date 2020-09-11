import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { avatarDisplay } from "../../Utilities/AvatarDisplay";
import Moment from "react-moment";
import { DeleteButton } from "../../Emotion styles/InputButton";
import { deleteComment } from "../../actions/post";

const avatarNameWrapper = css`
  display: flex;
  flex-direction: column;
  width: content;
  width: 10%;
  box-sizing: border-box;
`;

const CommentWrapper = css`
  width: 60%;
  background: white;
  margin: auto;
  margin-bottom: 1rem;
  padding: 1em;
`;

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <div css={CommentWrapper}>
      <Link to={`/profile/${user}`} css={avatarNameWrapper}>
        <img
          src={avatarDisplay(avatar)}
          alt="avatar"
          css={css`
            width: 100px;
            border-radius: 25px;
          `}
        />
        <span>{name}</span>
      </Link>
      <p>{text}</p>
      <div>
        <Moment format="DD/MM/YYYY">{date}</Moment>
      </div>
      {!auth.loading && user === auth.user._id && (
        <DeleteButton onClick={(e) => deleteComment(postId, _id)}>
          X
        </DeleteButton>
      )}
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
