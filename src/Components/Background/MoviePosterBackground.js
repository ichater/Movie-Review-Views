import React from "react";

export default function MoviePosterBackground({ backgroundImage }) {
  return (
    <>
      <img
        data-testid="movie-poster-background"
        className="movie-poster-background"
        src={require(`../../CSS/images/${backgroundImage}`)}
        alt="Background Posters"
      />
    </>
  );
}
