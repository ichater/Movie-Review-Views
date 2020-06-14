import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MovieSearchResults from "./MovieSearchResults";
import { Button, Input, InputLabel } from "@material-ui/core";

export default function MovieList() {
  const [movieList, setMovieList] = useState();
  const [movieTitleSearch, setMovieTitleSearch] = useState("");
  const movieInputRef = useRef();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://www.omdbapi.com/?apikey=ac8a5131&s=${movieTitleSearch}`,
    })
      .then((res) => {
        setMovieList(res.data);
      })
      .catch((err) => console.log(err));
  }, [movieTitleSearch]);

  return (
    <div>
      <InputLabel>Title:</InputLabel>
      <Input
        ref={movieInputRef}
        type="text"
        color="primary"
        margin="dense"
        // value={movieTitleSearch}
        // onChange={(e) => {
        //   setMovieTitleSearch(e.target.value);
        // }}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setMovieTitleSearch(movieInputRef.current.value);
        }}
      >
        Search
      </Button>

      <div className="movie-search-results_wrapper">
        <MovieSearchResults movieList={movieList} />
      </div>
    </div>
  );
}
