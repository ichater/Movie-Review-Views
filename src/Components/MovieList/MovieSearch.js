import React, { useContext } from "react";
import { MovieContext } from "./MovieListContext/MovieContext";
import MovieTable from "./MovieTable";
import { Button } from "@material-ui/core";
import fetchMovies from "../../Utilities/MovieJsonTransform";

export default function MovieSearch() {
  const {
    movieList,
    setMovieList,
    movieInputState,
    setMovieInputState,
    movieSortColumn,
    setMovieSortColumn,
  } = useContext(MovieContext);
  const handleFetch = () => {
    fetchMovies(movieInputState).then((transformedMovies) => {
      setMovieList(transformedMovies);
    });
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
