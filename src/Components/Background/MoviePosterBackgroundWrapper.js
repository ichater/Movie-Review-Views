import React, { useState } from "react";
import { posterArr } from "./posterArr";
import { useInterval } from "./PosterIntevalFunction";
import MoviePosterBackground from "./MoviePosterBackground";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function MoviePosterBackgroundWrapper() {
  const [backgroundImage, setBackgroundImage] = useState(
    posterArr[getRandomInt(posterArr.length)]
  );
  useInterval(() => {
    setBackgroundImage(posterArr[getRandomInt(posterArr.length)]);
  }, 10000);
  return (
    <>
      <MoviePosterBackground backgroundImage={backgroundImage} />
    </>
  );
}
