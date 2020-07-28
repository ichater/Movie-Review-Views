import React from "react";
import MoviePosterInformation from "./MoviePosterInformation";

export default function MoviePosterBackground({ backgroundMovie }) {
  return (
    <>
      <img
        data-testid="movie-poster-background"
        className="movie-poster-background"
        src={require(`../../CSS/images/${backgroundMovie.poster}`)}
        alt={backgroundMovie.title}
      />
      <MoviePosterInformation backgroundMovie={backgroundMovie} />
    </>
  );
}
