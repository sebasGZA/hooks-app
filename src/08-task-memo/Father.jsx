import { useState, useCallback } from "react";
import { Son } from "./Son";

export const Father = () => {
  const nummbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = useCallback((num) => {
    setValue((val) => val + num);
  }, []);

  return (
    <div>
      <h1>Father</h1>
      <p> Total: {value} </p>

      <hr />

      {nummbers.map((n) => (
        <Son key={n} number={n} increment={() => increment(n)} />
      ))}
    </div>
  );
};
