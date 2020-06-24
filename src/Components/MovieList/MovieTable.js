import React, { useContext } from "react";
import { MovieContext } from "./MovieListContext/MovieContext";
import { TableContainer, Table, TableRow, TableHead } from "@material-ui/core";
import MovieTableHeader from "./MovieTableHeader";
import MovieTableBody from "./MovieTableBody";

export default function MovieTable({ movieList, setMovieSortColumn }) {
  const { sortMovies, toggleCols, toggle } = useContext(MovieContext);
  let sortedMovieList;
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
