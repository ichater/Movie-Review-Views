import MovieSearch from "./MovieSearch";
import MovieContext from "./MovieListContext/MovieContext";
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
import MovieContextProvider from "./MovieListContext/MovieContext";
import fetchMovies from "../../Utilities/MovieJsonTransform";
// import TestEvents from "./TestEvents";

jest.mock("../../Utilities/MovieJsonTransform");

afterEach(cleanup);
const add = jest.fn((a, b) => a + b);

test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(2);
});

const successfulMovieAPICall = jest.fn(() => {
  return [
    {
      id: "tt1302006",
      title: "The Irishman",
      year: 2019,
      type: "movie",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZm…DJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
    },
  ];
});

test("api call success", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(2);
});
