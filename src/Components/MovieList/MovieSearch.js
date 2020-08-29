import React, { useState } from "react";
import MovieTable from "./MovieTable";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions/movieSearch";

export function MovieSearch({ movies, fetchMovies }) {
  const [movieInputState, setMovieInputState] = useState();
  const [movieSortColumn, setMovieSortColumn] = useState();

  const handleFetch = async () => {
    await fetchMovies(movieInputState);
  };

  return (
    <div className="movieSearchBackground">
      <div className="movie-search-input-wrapper">
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
        <div
          className="movie-search-button"
          variant="outlined"
          color="primary"
          size="large"
          data-testid="movie-fetch"
          onClick={handleFetch}
        >
          Search
        </div>
      </div>

      <div className="movie-search-results_wrapper">
        <MovieTable
          Checkbox
          movies={movies}
          movieSortColumn={movieSortColumn}
          setMovieSortColumn={setMovieSortColumn}
        />
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  movies: state.movies.items,
});
export default connect(mapStatetoProps, { fetchMovies })(MovieSearch);
