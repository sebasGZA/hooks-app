import React from "react";
import { useFetch, useCounter } from "../hooks";
import { Quote, LoadingQuote } from "./";

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   }

  if (hasError) {
    console.log(hasError);
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
