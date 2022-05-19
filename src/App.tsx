import React from "react";
import "./App.css";
const { useState } = React;

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
    </div>
  );
}

export default App;
