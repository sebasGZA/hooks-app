import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);

  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
