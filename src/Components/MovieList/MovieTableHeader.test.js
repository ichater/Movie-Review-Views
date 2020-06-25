import MovieTableHeader from "./MovieTableHeader";

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

afterEach(cleanup);

it("renders Select movies please", () => {
  const { getByTestId } = render(<MovieTableHeader isPopulated={0} />);
  expect(getByTestId("no-movie-response")).toHaveTextContent(
    "Select movies please"
  );
});

// it("interactive table header not visible", () => {
//   const { getByTestId } = render(<MovieTableHeader isPopulated={0} />);
//   expect(getByTestId("interactive-title")).not.toBeInTheDocument();
// });

it("interactive table header visible", () => {
  const { getByTestId } = render(<MovieTableHeader isPopulated={1} />);
  expect(getByTestId("interactive-title")).toBeVisible();
});

it("renders Select movies please", () => {
  const { getByTestId } = render(<MovieTableHeader isPopulated={1} />);
  expect(getByTestId("interactive-title")).toBeVisible();
});
