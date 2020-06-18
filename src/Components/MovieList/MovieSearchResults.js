import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieListContext/MovieContext";
import { withStyles } from "@material-ui/core/styles";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../CSS-muitheme/TableStyles";
import {
  Checkbox,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
} from "@material-ui/core";
import MovieSearchResultsRendered from "./MovieSearchResultsRendered";

export default function MovieSearchResults({ movieList, setMovieSortColumn }) {
  const toggle = () =>
    toggleCols === true ? setToggleCols(false) : setToggleCols(true);
  const { sortMovies, unSortMovies, toggleCols, setToggleCols } = useContext(
    MovieContext
  );
  let sortedMovieList;
  toggleCols !== true
    ? (sortedMovieList = movieList?.sort(sortMovies))
    : (sortedMovieList = movieList?.sort(unSortMovies));

  return (
    <TableContainer>
      <Table aria-label="customized table" color="primary">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Select</StyledTableCell>
            <StyledTableCell
              className="interactive-title"
              onClick={() => {
                console.log(toggleCols);
                toggle();
                setMovieSortColumn("title");
              }}
            >
              Title
            </StyledTableCell>
            <StyledTableCell
              className="interactive-title"
              align="center"
              onClick={() => {
                console.log(toggleCols);
                toggle();
                setMovieSortColumn("year");
              }}
            >
              Year&nbsp;
            </StyledTableCell>
            <StyledTableCell align="center">Type&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {" "}
          {sortedMovieList?.map((movie) => {
            return (
              <StyledTableRow key={movie.id} className="movie-table-row">
                <StyledTableCell align="left">
                  <Checkbox />
                </StyledTableCell>

                <StyledTableCell className="movie-title-poster">
                  <h3>{movie.title}</h3>
                  <img src={movie.poster} alt="movie poster"></img>
                </StyledTableCell>
                <StyledTableCell align="center">{movie.year}</StyledTableCell>
                <StyledTableCell align="center">{movie.type}</StyledTableCell>
              </StyledTableRow>
              // <MovieSearchResultsRendered
              //   key={movie.id}
              //   {...sortedMovieList}
              //   Checkbox={Checkbox}
              // />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
