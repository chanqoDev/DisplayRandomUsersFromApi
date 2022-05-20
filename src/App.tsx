import * as React from "react";
import "./App.css";
import FetchRandomData from "./FetchRandomData";

const { useState } = React;
//https://randomuser.me/api/

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1> Hello Sample </h1>
      <p> {counter}</p>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increase Counter{" "}
      </button>
      <button
        onClick={() => {
          FetchRandomData();
        }}
      >
        Fetch Random Data{" "}
      </button>
    </div>
  );
}

export default App;
