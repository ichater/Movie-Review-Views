import MovieSearch from "./MovieSearch";
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
import axios from "axios";
import fetchMovies from "../../Utilities/MovieJsonTransform";

jest.mock("../../Utilities/MovieJsonTransform");

afterEach(cleanup);
const add = jest.fn((a, b) => a + b);

test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(2);
});

const successfulMovieAPICall = jest.fn(() => {
  axios.get.mockResolvedValueOnce({
    data: {
      results: [
        {
          id: "tt1302006",
          title: "The Irishman",
          year: 2019,
          type: "movie",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZm…DJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
        },
      ],
    },
  });
});

test("api call success", async () => {
  successfulMovieAPICall();
  const { getByTestId } = render(<MovieItem />);
  const movieYearDisplay = await waitFor(() => {
    getAllByTestId("movie-year").map((year) => year.textContent);
  });
  expect(getByTestId("movie-year")).toHaveTextContent("2019");
});
