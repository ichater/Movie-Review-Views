// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const InputButton = css`
  width: fit-content;
  padding: 1rem;
  margin: auto;
  align-items: center;
  background-color: rgba(204, 255, 255, 0.5);
  border-radius: 10px;
  border: 1px solid rgb(204, 255, 255);
`;
