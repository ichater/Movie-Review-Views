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
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
// import axios from "axios";
// import fetchMovies from "../../Utilities/MovieJsonTransform";
import axios from "axios";

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

  const fakeFunction = () => {
    return new Promise((resolve, reject) => {
      resolve([movie1]);
    });
  };

  const { getByTestId, getByText } = render(
    act(() => {
      <MovieSearch fetchMovies={fakeFunction} />;
    })
  );
  // fireEvent(getByTestId("movie-fetch"), new MouseEvent("click"));

  act(() => {
    fireEvent.click(getByText("Search"));
  });

  // 3

  expect(getByTestId("movie-year")).toHaveTextContent("1990");
});
