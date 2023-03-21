import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";

// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    // {/* <HooksApp /> */}
    // {/* <CounterApp /> */}
    // {/* <CounterWithCustomHook /> */}
    // {/* <SimpleForm /> */}
    // {/* <FormWithCustomHook /> */}
    <MultipleCustomHook />
  // {/* </React.StrictMode> */}
);
