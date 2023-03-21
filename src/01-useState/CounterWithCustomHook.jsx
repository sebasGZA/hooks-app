import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, decrement, increment, reset } = useCounter(0);

  return (
    <>
      <div>Counter With Hook: {counter}</div>
      <hr />

      <button className="btn btn-primary" onClick={() => decrement()}>
        -1
      </button>
      <button className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
    </>
  );
};
