import MovieItem from "./MovieItem";
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

it("renders the title", () => {
  const { getByTestId } = render(<MovieItem title={"batman"} />);
  expect(getByTestId("movie-title")).toHaveTextContent("batman");
});

it("renders missing year message when year not provided", () => {
  const { getByTestId } = render(<MovieItem />);
  expect(getByTestId("movie-year")).toHaveTextContent("No year avalible");
});
