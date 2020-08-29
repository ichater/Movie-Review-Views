import React, { useState } from "react";

import { TableContainer, Table } from "@material-ui/core";
import MovieTableHeader from "./MovieTableHeader";
import MovieTableBody from "./MovieTableBody";
import { connect } from "react-redux";

export function MovieTable({ movies, setMovieSortColumn, movieSortColumn }) {
  const [toggleCols, setToggleCols] = useState(true);

  const toggle = () =>
    toggleCols === true ? setToggleCols(false) : setToggleCols(true);
  let sortedMovieList;

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
  toggleCols !== true
    ? (sortedMovieList = movies.sort(sortMovies))
    : (sortedMovieList = movies.sort(sortMovies).reverse());

  return (
    <TableContainer>
      <Table aria-label="customized table" color="primary">
        <MovieTableHeader
          toggle={toggle}
          setMovieSortColumn={setMovieSortColumn}
          isPopulated={movies.length > 0}
        />
        <MovieTableBody
          sortedMovieList={sortedMovieList}
          setMovieSortColumn={setMovieSortColumn}
        />
      </Table>
    </TableContainer>
  );
}
const mapStatetoProps = (state) => ({
  movies: state.movies.items,
});
export default connect(mapStatetoProps)(MovieTable);
