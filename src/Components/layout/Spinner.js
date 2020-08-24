import React from "react";
import spinner from "../../CSS/images/spinner.gif";

export default function Spinner() {
  return (
    <>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Spinner Loading"
      ></img>
    </>
  );
}
