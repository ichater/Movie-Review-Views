import React from "react";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../CSS-muitheme/TableStyles";

export default function MovieSearchResultsRendered(movie, Checkbox) {
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
}
