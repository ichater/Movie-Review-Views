import React from "react";
import { TableRow, TableHead } from "@material-ui/core";
import { StyledTableCell } from "../../CSS-muitheme/TableStyles";
export default function MovieTableHeader(props) {
  const { toggle, setMovieSortColumn, isPopulated } = props;
  return (
    <TableHead>
      <TableRow data-testid="movie-table-header">
        {isPopulated ? (
          <>
            <StyledTableCell align="left">Select</StyledTableCell>
            <StyledTableCell
              data-test="interactive-title"
              className="interactive-title"
              onClick={() => {
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
                toggle();
                setMovieSortColumn("year");
              }}
            >
              Year&nbsp;
            </StyledTableCell>
          </>
        ) : (
          <StyledTableCell data-test="no-movie-response">
            Select movies please
          </StyledTableCell>
        )}
        <StyledTableCell align="center">Type&nbsp;</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
