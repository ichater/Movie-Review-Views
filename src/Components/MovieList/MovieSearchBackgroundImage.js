import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function MovieSearchBackgroundImage() {
  const posterArr = [
    "once-upon-a-time-in-america-1530579166.jpg",
    "thumb-1920-691866.jpg",
    "Cassablanca.jpg",
    "_methode_times_prod_web_bin_265bd31e-cfdb-11e9-bac7-3a108794927b.jpg",
    "Seventh_Seal.jpg",
    "Ghost_in_the_shell.jpg",
    "exorcist.jpg",
    "Luke_Skywalker.jpeg",
    "Mclane.jpg",
    "rosemarys-baby-0618-ss08.jpg",
    "Woody-Allen-Diane-Keaton-Oscar-Annie-Hall.jpg",
    "Manhattan.jpg",
  ];
  const [backgroundImage, setBackgroundImage] = useState(posterArr[0]);

  useInterval(() => {
    setBackgroundImage(posterArr[getRandomInt(posterArr.length)]);
  }, 1000);

  return (
    <>
      <img
        className="movie-search-image"
        src={require(`../../CSS/images/${backgroundImage}`)}
      />
    </>
  );
}
