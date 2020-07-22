import MoviePosterBackground from "./MoviePosterBackground";
import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByText,
  cleanup,
} from "@testing-library/react";

// it("Image changes after 10 seconds", () => {
//   const { getByTestId } = render(<MoviePosterBackground />);
//   expect(
//     getByTestId("movie-poster-background").getElement(0).props.src
//   ).toEqual("batman");
// });
