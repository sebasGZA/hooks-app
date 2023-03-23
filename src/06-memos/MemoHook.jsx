import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

const heavyStuff = (iteration = 100) => {
  for (let index = 0; index < iteration; index++) {
    console.log("Here we go");
  }

  return `${iteration} iterations done `;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
