import React from "react";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../CSS-muitheme/TableStyles";

export default function MovieItem({ title, poster, year, type }) {
  return (
    <>
      <StyledTableRow className="movie-table-row" data-testid="movie-table-row">
        <StyledTableCell align="left">
          <input type="checkbox" data-testid="CheckBox" />
        </StyledTableCell>
        <StyledTableCell
          className="movie-title-poster"
          data-testid="movie-title-poster"
        >
          <h3 data-testid="movie-title">{title}</h3>
          <img src={poster} alt="movie poster"></img>
        </StyledTableCell>
        <StyledTableCell align="center" data-testid="movie-year">
          {year ? year : "No year avalible"}
        </StyledTableCell>
        <StyledTableCell align="center" data-testid="movie-type">
          {type}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
