import React, { useState } from "react";
import { posterArr } from "./posterArr";
import { useInterval } from "./PosterIntevalFunction";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function MoviePosterBackground() {
  const [backgroundImage, setBackgroundImage] = useState(
    posterArr[getRandomInt(posterArr.length)]
  );
  useInterval(() => {
    setBackgroundImage(posterArr[getRandomInt(posterArr.length)]);
  }, 10000);

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
