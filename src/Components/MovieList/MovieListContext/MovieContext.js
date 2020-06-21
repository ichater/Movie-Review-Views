import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [movieInputState, setMovieInputState] = useState();
  const [toggleCols, setToggleCols] = useState(true);
  const [movieSortColumn, setMovieSortColumn] = useState();

  const toggle = () =>
    toggleCols === true ? setToggleCols(false) : setToggleCols(true);

  const sortMovies = (a, b) => {
    if (movieSortColumn === "year") {
      return a[movieSortColumn] - b[movieSortColumn];
    }
    if (movieSortColumn === "title") {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      return titleA < titleB ? -1 : 1;
    }
  };

  const unSortMovies = (a, b) => {
    if (movieSortColumn === "year") {
      return b[movieSortColumn] - a[movieSortColumn];
    }
    if (movieSortColumn === "title") {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      return titleA < titleB ? 1 : -1;
    }
  };

  const test = "test";
  return (
    <MovieContext.Provider
      value={{
        movieInputState,
        movieSortColumn,
        setMovieSortColumn,
        setMovieInputState,
        sortMovies,
        unSortMovies,
        movieList,
        setMovieList,
        toggle,
        toggleCols,
        setToggleCols,
        test,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
