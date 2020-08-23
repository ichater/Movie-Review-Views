import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const FilmQuotes = ({ filmQuotes }) => {
  return (
    <Fragment>
      <h2>Place holder for film quotes</h2>
      <table>
        <thead>
          <tr>
            <th>Film</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
          {filmQuotes.map((e) => (
            <tr key={e._id}>
              <td>{e.film}</td>
              <td>"{e.quote}"</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

FilmQuotes.propTypes = {};

export default FilmQuotes;
