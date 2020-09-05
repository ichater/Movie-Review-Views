import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "../actions/types";
import MovieSearch, { transformOmdbData, initialState } from "./movieSearch";

describe("Testing the MovieSearch reducer", () => {
  describe("MovieSearch reducer with FETCH_MOVIES_SUCCESS", () => {
    it("Hellraiser search", () => {
      const action = {
        type: FETCH_MOVIES_SUCCESS,
        payload: {
          Search: [
            {
              Title: "Hellraiser",
              Year: "1987",
              imdbID: "tt0093177",
              Type: "movie",
              Poster:
                "https://m.media-amazon.com/images/M/MV5BMTkyNzc4NjkwNV5BMl5BanBnXkFtZTgwNzI2Mjc1MDE@._V1_SX300.jpg",
            },
          ],
        },
      };
      const result = MovieSearch(initialState, action);
      expect(result).toEqual({
        items: [
          {
            id: "tt0093177",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTkyNzc4NjkwNV5BMl5BanBnXkFtZTgwNzI2Mjc1MDE@._V1_SX300.jpg",
            title: "Hellraiser",
            type: "movie",
            year: 1987,
          },
        ],
      });
    });
  });
});
