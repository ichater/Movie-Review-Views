import React, { useContext } from "react";
import { MovieContext } from "./MovieListContext/MovieContext";
import MovieSearchResults from "./MovieSearchResults";
import { Button } from "@material-ui/core";
import fetchMovies from "../../Utilities/MovieJsonTransform";

export default function MovieList() {
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
        onChange={(e) => {
          setMovieInputState(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={handleFetch}
      >
        Search
      </Button>

      <div className="movie-search-results_wrapper">
        <MovieSearchResults
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
