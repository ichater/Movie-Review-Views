import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteQuote } from "../../actions/profile";

const FilmQuotes = ({ filmQuotes, deleteQuote }) => {
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
              <td onClick={() => deleteQuote(e._id)}> Delete </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

FilmQuotes.propTypes = {
  deleteQuote: PropTypes.func.isRequired,
};

export default connect(null, { deleteQuote })(FilmQuotes);
