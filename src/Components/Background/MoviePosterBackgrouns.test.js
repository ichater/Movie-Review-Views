import MoviePosterBackground from "./MoviePosterBackground";
import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

it("Image changes after 10 seconds", () => {
  const { getByTestId } = render(
    <MoviePosterBackground backgroundImage={"Manhattan.jpg"} />
  );
  expect(getByTestId(component.state.value)).toBe("Manhattan.jpg");
});
