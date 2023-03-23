import { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((value = 1) => {
    setCounter((count) => count + value);
  }, []);

  // useEffect(() => {
  //   increment();
  // }, [increment]);

  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
