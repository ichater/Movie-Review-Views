// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import styled from "@emotion/styled";

export const Button = styled.button(
  {
    color: "darkorchid",
  },
  (props) => ({
    fontSize: props.fontSize,
  })
);
