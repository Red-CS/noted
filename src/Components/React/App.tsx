import "../Sass/App.sass";
import Sidebar from "./components/Sidebar";
import React, { useEffect } from "react";
// import logo from "../../Assets/logo.svg";
import Notebook from "./components/Notebook";
import Editor from "./components/Editor";

const App: React.FunctionComponent = () => {
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
      <div
        className="Tri-Modal"
        style={{ backgroundColor: "blue", padding: "50px" }}
      >
        <Sidebar />
        <Notebook />
        <Editor />
      </div>
    </div>
  );
};

export default App;
