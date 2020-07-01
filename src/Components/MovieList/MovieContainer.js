import React from "react";
import MovieSearch from "./MovieSearch";
import fetchMovies from "../../Utilities/MovieJsonTransform";

export default function MovieContainer() {
  return (
    <>
      <MovieSearch fetchMovies={fetchMovies} />
    </>
  );
}
