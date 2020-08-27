import React, { useState } from "react";
import { posterArr } from "./posterArr";
import useInterval from "../../Utilities/IntervalFunction";
import MoviePosterBackground from "./MoviePosterBackground";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function MoviePosterBackgroundWrapper() {
  const [backgroundMovie, setBackgroundMovie] = useState(
    posterArr[getRandomInt(posterArr.length)]
  );
  useInterval(() => {
    setBackgroundMovie(posterArr[getRandomInt(posterArr.length)]);
  }, 10000);

  return (
    <>
      <MoviePosterBackground backgroundMovie={backgroundMovie} />
    </>
  );
}
