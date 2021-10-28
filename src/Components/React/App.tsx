import "../Sass/App.sass";
// React
import React, { useState, useEffect } from "react";
// Assets
import logo from "../../Assets/logo.svg";
const App: React.FunctionComponent = () => {
  const [countHookExample, setCountHookExample] = useState<number>(0);

  // effect hooks replace the lifecycle methods in a function component
  useEffect(
    () => {
      console.log("mounted");
      return () => {
        console.log("exited");
      };
    },
    [
      /**
       * variables that trigger this effect.
       * if [] triggers only on mounting.
       * if undefined trigers on every render.
       */
    ]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>
            You have clicked the button {countHookExample} times{" "}
            <span
              className="button"
              onClick={() => setCountHookExample(countHookExample + 1)}
            >
              INC
            </span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default App;
