import * as React from "react";
import "./App.css";
import FetchRandomData from "./FetchRandomData";

const { useEffect, useState } = React;
//https://randomuser.me/api/

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
  useEffect(() => {
    FetchRandomData().then((randomData) => {
      setRandomUserDataJSON(randomData || "");
    });
  }, []);
  // empty array to mimic componentDidLoad() very intutive becuase it load when the page is loaded once.

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
      <p>{randomUserDataJSON}</p>
    </div>
  );
}

export default App;
