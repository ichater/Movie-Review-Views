import React from "react";
import MovieContextProvider from "./MovieListContext/MovieContext";
import MovieSearch from "./MovieSearch";

export default function MainMovieComponentRenderer() {
  return (
    <>
      <MovieContextProvider>
        <MovieSearch />
      </MovieContextProvider>
    </>
  );
}
