import MovieSearch from "./MovieSearch";
import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MovieContextProvider from "./MovieListContext/MovieContext";
import fetchMovies from "../../Utilities/MovieJsonTransform";

jest.mock("../../Utilities/MovieJsonTransform");

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

    // expect(container.firstChild).toMatchInlineSnapshot(`
    //   <h1>bruno</h1>
    // `)

    // expect(getByTestId("counter-value").innerHTML).toEqual("3");
  });
});
