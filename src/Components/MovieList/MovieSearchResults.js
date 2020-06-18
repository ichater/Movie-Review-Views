import React from "react";
import { withStyles } from "@material-ui/core/styles";

import {
  Checkbox,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function MovieSearchResults({
  movieList,
  movieSortColumn,
  setMovieSortColumn,
}) {
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

  const sortedMovieList = movieList?.sort(sortMovies);
  return (
    <TableContainer>
      <Table aria-label="customized table" color="primary">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Select</StyledTableCell>
            <StyledTableCell
              onClick={() => {
                setMovieSortColumn("title");
              }}
            >
              Title
            </StyledTableCell>
            <StyledTableCell
              align="center"
              onClick={() => {
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
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
