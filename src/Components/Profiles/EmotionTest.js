import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// import styled from "@emotion/style";

export default function EmotionTest(props) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      This is darkorchid.
      <div className="name">This is orange</div>
    </div>
  );
}
