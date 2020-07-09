import { cleanup } from "@testing-library/react";
import { transformOmdbData } from "./MovieJsonTransform";

// import { cleanup } from "@testing-library/react";

afterEach(cleanup);

it("parses movie data into usable format=", () => {
  const apiData = {
    Search: [
      {
        Title: "The Irishman",
        Year: "2019",
        imdbID: "tt1302006",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZm…DJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
      },
    ],
  };
  const parsedData = [
    {
      id: "tt1302006",
      title: "The Irishman",
      year: 2019,
      type: "movie",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZm…DJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
    },
  ];
  expect(transformOmdbData(apiData)).toEqual(parsedData);
});
