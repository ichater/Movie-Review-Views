import MovieSearch from "./MovieSearch";

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

describe("fetching movies", () => {
  beforeEach(() => {
    fetchMovies.mockResolvedValue(["bruno"]);

    render(
      <MovieContextProvider>
        <MovieSearch />
      </MovieContextProvider>
    );
  });

  test("search button fetches movies", () => {
    fireEvent.click(screen.getByText("Search"));
    expect(fetchMovies).toHaveBeenCalled();
  });
});

// it("search button fetches moviers", () => {
//   const { getByTestId } = render(<MovieSearch />);
//   getByTestId("movie-fetch-input").textContent("blade");
//   fireEvent.click(getByTestId("movie-fetch"));

//   expect(fetchMovies).toHaveBeenCalled();
// });
