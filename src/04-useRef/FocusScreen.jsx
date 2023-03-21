import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClickInput = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Type your name"
        className="form-control"
      />

      <input
        type="text"
        placeholder="Type your name"
        className="form-control mt-2"
      />

      <input
        type="text"
        placeholder="Type your name"
        className="form-control mt-2"
      />

      <button className="btn btn-primary mt-2" onClick={onClickInput}>
        Set Focus
      </button>
    </>
  );
};
