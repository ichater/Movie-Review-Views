import React, { useContext } from "react";
import { MovieContext } from "./MovieListContext/MovieContext";

import { StyledTableCell } from "../../CSS-muitheme/TableStyles";
import { TableContainer, Table } from "@material-ui/core";
import MovieTableHeader from "./MovieTableHeader";
import MovieTableBody from "./MovieTableBody";

export default function MovieSearchResults({ movieList, setMovieSortColumn }) {
  const { sortMovies, unSortMovies, toggleCols, toggle } = useContext(
    MovieContext
  );
  let sortedMovieList;
  toggleCols !== true
    ? (sortedMovieList = movieList?.sort(sortMovies))
    : (sortedMovieList = movieList?.sort(unSortMovies));

  return (
    <TableContainer>
      <Table aria-label="customized table" color="primary">
        {(movieList.length > 0 && (
          <MovieTableHeader
            toggle={toggle}
            setMovieSortColumn={setMovieSortColumn}
            StyledTableCell={StyledTableCell}
          />
        )) || <div>Select movies please</div>}
        <MovieTableBody
          sortedMovieList={sortedMovieList}
          setMovieSortColumn={setMovieSortColumn}
        />
      </Table>
    </TableContainer>
  );
}
