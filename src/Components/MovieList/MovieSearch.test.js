// import MovieSearch from "./MovieSearch";
// import MovieContext from "./MovieListContext/MovieContext";
// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   render,
//   fireEvent,
//   waitFor,
//   screen,
//   getByText,
//   cleanup,
// } from "@testing-library/react";
// import MovieContextProvider from "./MovieListContext/MovieContext";
// import fetchMovies from "../../Utilities/MovieJsonTransform";
// // import TestEvents from "./TestEvents";

// jest.mock("../../Utilities/MovieJsonTransform");

// afterEach(cleanup);

// test("Expect checkbox to check on click", () => {
//   const contextTest = (
//     <MovieContextProvider value="movieInputState">
//       <MovieSearch />
//     </MovieContextProvider>
//   );
//   const { getByTestId, getByText } = render(contextTest);

//   fireEvent.click(screen.getByTestId("movie-fetch"));
//   expect(handleFetch).toHaveBeenCalled();
// });
