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

export default function MovieSearchBackgroundImage() {
  const backgroundImages = [
    "once-upon-a-time-in-america-1530579166.jpg",
    "thumb-1920-691866.jpg",
    "hello",
  ];
  const [backgroundImage, setBackgroundImage] = useState(0);

  useInterval(() => {
    const funct = () => {
      console.log(backgroundImage);

      if (backgroundImage === backgroundImages.length) {
        setBackgroundImage(backgroundImages[0]);
      } else {
        setBackgroundImage(backgroundImages[+1]);
      }
    };
    funct();
  }, 1000);

  return (
    <>
      <div>{backgroundImage}</div>
      <img
        className="movie-search-image"
        src={require("../../CSS/images/once-upon-a-time-in-america-1530579166.jpg")}
      />
    </>
  );
}
