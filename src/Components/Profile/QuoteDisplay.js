import React, { useEffect, useState } from "react";
import useInterval from "../../Utilities/IntervalFunction";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function QuoteDisplay({ filmQuotes }) {
  const [displayedQuote, setDisplayedQuote] = useState(
    filmQuotes[getRandomInt(filmQuotes.length)]
  );
  useInterval(() => {
    setDisplayedQuote(filmQuotes[getRandomInt(filmQuotes.length)]);
  }, 5000);

  const quoteWrapper = css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  `;

  return (
    <div css={quoteWrapper}>
      <span
        css={css`
          font: italic 1.2em "Fira Sans", serif;
        `}
      >
        "{displayedQuote.quote}"
      </span>
      <span
        css={css`
          font: bold 1.2em "Fira Sans", serif;
        `}
      >
        {displayedQuote.film}
      </span>
    </div>
  );
}
