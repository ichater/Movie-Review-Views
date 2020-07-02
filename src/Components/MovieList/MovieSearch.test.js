import MovieSearch from "./MovieSearch";
import MovieItem from "./MovieItem";
import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
  waitForElementToBeRemoved
} from "@testing-library/react";
// import axios from "axios";
// import fetchMovies from "../../Utilities/MovieJsonTransform";

jest.mock("axios");

afterEach(cleanup);

test("api call success", async () => {
  const movie1 = {
    id: "tm1",
    title: "Test Movie 1",
    year: 1990,
    type: "action",
    poster: "somePoster.jpg",
  };

  const fakeFunction =() => Promise.resolve([movie1]);

  const { getByTestId, getByText } = render(<MovieSearch fetchMovies={fakeFunction} />);
  fireEvent.click(getByText("Search"));

  await waitForElementToBeRemoved(() => screen.getByTestId("no-movie-response"))

  expect(getByTestId("movie-year")).toHaveTextContent("1990");

});
