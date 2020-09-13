import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export function DeleteButton({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      css={css`
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
      `}
    >
      {children}
    </div>
  );
}
