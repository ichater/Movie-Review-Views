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

it("Expect checkbox not to be checked", () => {
  const { getByTestId } = render(<MovieItem />);
  expect(getByTestId("CheckBox")).not.toBeChecked();
});

it("Expect checkbox to check on click", () => {
  const { getByTestId } = render(<MovieItem />);

  fireEvent.click(screen.getByTestId("CheckBox"));
  expect(getByTestId("CheckBox")).toBeChecked();
});
