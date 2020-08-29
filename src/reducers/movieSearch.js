import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "../actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        items: transformOmdbData(payload),
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

const transformOmdbData = (data) => {
  if (data.Response === "False") {
    return [];
  }
  const oldData = data.Search;
  const newData = oldData.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: parseInt(movie.Year),
      type: movie.Type,
      poster: movie.Poster,
    };
  });
  return newData;
};
