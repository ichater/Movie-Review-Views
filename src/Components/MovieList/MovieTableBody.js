import React from "react";
import { TableBody } from "@material-ui/core";
import MovieItem from "./MovieItem";

const MovieTableBody = (props) => {
  const { sortedMovieList } = props;
  console.log(sortedMovieList);
  return (
    <TableBody>
      {sortedMovieList?.map((movie) => {
        console.log(movie);
        return <MovieItem key={movie.id} {...movie} />;
      })}
    </TableBody>
  );
};

export default MovieTableBody;
