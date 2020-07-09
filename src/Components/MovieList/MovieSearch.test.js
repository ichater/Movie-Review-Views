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
  waitForElementToBeRemoved,
} from "@testing-library/react";
// import axios from "axios";
// import fetchMovies from "../../Utilities/MovieJsonTransform";

jest.mock("axios");

afterEach(cleanup);

test("api call success renders movies to table", async () => {
  const movie1 = {
    id: "tm1",
    title: "Test Movie 1",
    year: 1990,
    type: "action",
    poster: "somePoster.jpg",
  };

  const fakeApiResult = () => Promise.resolve([movie1]);

  const { getByTestId, getByText } = render(
    <MovieSearch fetchMovies={fakeApiResult} />
  );
  fireEvent.click(getByText("Search"));

  await waitForElementToBeRemoved(() =>
    screen.getByTestId("no-movie-response")
  );

  expect(getByTestId("movie-year")).toHaveTextContent("1990");
});

test("api call fail keeps table at 0 movies visible", async () => {
  const fakeApiFailResult = () => Promise.resolve([]);
  const { getByTestId, getByText } = render(
    <MovieSearch fetchMovies={fakeApiFailResult} />
  );
  fireEvent.click(getByText("Search"));

  expect(getByTestId("no-movie-response")).toBeVisible();
});
