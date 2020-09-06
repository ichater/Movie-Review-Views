import React, { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function MoviePosterInformation({ backgroundMovie }) {
  const [movieInformation, setMovieInformation] = useState(false);
  return (
    <div className="background-movie-wrapper">
      <div
        data-testid={backgroundMovie.poster}
        className={
          movieInformation
            ? "background-movie-title-reveal"
            : "background-movie-title-reveal_faded"
        }
        onClick={() => setMovieInformation(!movieInformation)}
      >
        {movieInformation ? "Hide Movie Details" : "View Movie Details"}
      </div>
      <Transition in={movieInformation} timeout={duration}>
        {(state) => (
          <>
            <span
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className="background-movie-title"
              // data-testid={backgroundMovie.poster}
            >
              {backgroundMovie.title} ({backgroundMovie.year})
            </span>
          </>
        )}
      </Transition>
    </div>
  );
}
