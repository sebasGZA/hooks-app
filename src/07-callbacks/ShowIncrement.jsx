import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log(" Here we go ");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});
