import MoviePosterBackground from "./MoviePosterBackground";
import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import useInterval from "./PosterIntevalFunction";
import { posterArr } from "./posterArr";

it("Image in current state visible", () => {
  const { getByTestId } = render(
    <MoviePosterBackground backgroundImage={"Manhattan.jpg"} />
  );
  expect(getByTestId("Manhattan.jpg")).toBeVisible();
});

// jest.useFakeTimers();

// it("Image changes after 10 seconds", () => {
//   const { getByTestId } = render(
//     <MoviePosterBackground backgroundImage={"Manhattan.jpg"} />
//   );
//   expect(getByTestId("Manhattan.jpg")).toBeVisible();
//   useInterval(() => {
//     setBackgroundImage(posterArr[getRandomInt(posterArr.length)]);
//   }, 10000);
//   // jest.advanceTimersByTime(11000);
//   expect(getByTestId("Manhattan.jpg")).not.toBeVisible();
// });
