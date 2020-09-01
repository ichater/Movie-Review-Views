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

export const deleteButton = css`
  width: fit-content;
  padding: 3px 5px;

  align-items: center;
  background-color: rgb(255, 77, 77);
  color: white;
  border-radius: 10px;
  border: 1px solid rgb(204, 255, 255);
  &:hover {
    cursor: pointer;
    background-color: rgb(204, 0, 0);
  }
`;
