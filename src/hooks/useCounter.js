import { useState } from "react";

export const useCounter = (initValue = 10) => {
  const [counter, setCounter] = useState(initValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const reset = () => {
    setCounter(initValue);
  };

  const decrement = (value = 1) => {
    counter !== 0 && setCounter(counter - value);
  };

  return { counter, decrement, increment, reset };
};
