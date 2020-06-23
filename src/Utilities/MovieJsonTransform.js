import axios from "axios";

const fetchMovies = (titleSearch) => {
  return axios({
    method: "GET",
    url: `http://www.omdbapi.com/?apikey=47416750&s=${titleSearch}`,
  })
    .then((res) => {
      return transformOmdbData(res.data);
    })
    .catch((err) => console.log(err));
};
//abstraction
const transformOmdbData = (data) => {
  //{"Response":"False","Error":"Movie not found!"}
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
export default fetchMovies;
