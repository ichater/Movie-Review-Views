import React from "react";
import { TableRow, TableHead } from "@material-ui/core";

export default function MovieTableHeader(props) {
  const { toggle, setMovieSortColumn, StyledTableCell } = props;
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left">Select</StyledTableCell>
        <StyledTableCell
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
        <StyledTableCell align="center">Type&nbsp;</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
