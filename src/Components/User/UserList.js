import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableBody,
} from "@material-ui/core";
import { StyledTableCell } from "../../CSS-muitheme/TableStyles";

export default function UserList() {
  const [userDisplay, setUserDisplay] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/users/",
    })
      .then((res) => {
        setUserDisplay(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="user-table_wrapper">
      <TableContainer>
        <Table className="main-user-table">
          <TableHead>
            <TableRow className="main-user-table_header-row">
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDisplay.map((user) => {
              return (
                <TableRow className="main-user-table_user-row">
                  <StyledTableCell>
                    <Link to={`/users/${user._id}`}>
                      <span key={user.id}> {user.username} </span>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
