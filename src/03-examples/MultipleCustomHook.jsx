import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/1"
  );

  console.log({ data, isLoading, hasError });
  
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
    </>
  );
};
