import React, { useState } from "react";

import { TableContainer, Table, TableRow, TableHead } from "@material-ui/core";
import MovieTableHeader from "./MovieTableHeader";
import MovieTableBody from "./MovieTableBody";

export default function MovieTable({
  movieList,
  setMovieSortColumn,
  movieSortColumn,
}) {
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
    ? (sortedMovieList = movieList.sort(sortMovies))
    : (sortedMovieList = movieList.sort(sortMovies).reverse());

  return (
    <TableContainer>
      <Table aria-label="customized table" color="primary">
        <MovieTableHeader
          toggle={toggle}
          setMovieSortColumn={setMovieSortColumn}
          isPopulated={movieList.length > 0}
        />
        <MovieTableBody
          sortedMovieList={sortedMovieList}
          setMovieSortColumn={setMovieSortColumn}
        />
      </Table>
    </TableContainer>
  );
}
