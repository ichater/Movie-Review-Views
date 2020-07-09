import React, { useState } from "react";
import MovieTable from "./MovieTable";
import { Button } from "@material-ui/core";
// import fetchMovies from "../../Utilities/MovieJsonTransform";

export default function MovieSearch({ fetchMovies }) {
  const [movieList, setMovieList] = useState([]);
  const [movieInputState, setMovieInputState] = useState();
  const [movieSortColumn, setMovieSortColumn] = useState();

  const handleFetch = async () => {
    const movies = await fetchMovies(movieInputState);
    setMovieList(movies);
  };

  return (
    <div>
      <label className="movie-search-input-label">Title:</label>
      <input
        type="text"
        color="primary"
        margin="dense"
        className="movie-search-input"
        data-testid="movie-search-input"
        value={movieInputState}
        onChange={(e) => {
          setMovieInputState(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        data-testid="movie-fetch"
        onClick={handleFetch}
      >
        Search
      </Button>

      <div className="movie-search-results_wrapper">
        <MovieTable
          setMovieList={setMovieList}
          Checkbox
          movieList={movieList}
          movieSortColumn={movieSortColumn}
          setMovieSortColumn={setMovieSortColumn}
        />
      </div>
    </div>
  );
}
