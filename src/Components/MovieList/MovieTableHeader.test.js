import MovieTableHeader from "./MovieTableHeader";

import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders Select movies please", () => {
  const { getByTestId } = render(<MovieTableHeader isPopulated={0} />);
  expect(getByTestId("no-movie-response")).toHaveTextContent(
    "Select movies please"
  );
});

it("When there are no movies to show 'select movies please' is visible", () => {
  const { getByTestId } = render(<MovieTableHeader isPopulated={false} />);
  expect(getByTestId("no-movie-response")).toBeVisible();
});

it("interactive table header visible", () => {
  const { getByTestId } = render(<MovieTableHeader isPopulated={1} />);
  expect(getByTestId("interactive-title")).toBeVisible();
});
