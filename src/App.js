import React, { useEffect } from "react";
import "./App.css";
import { OBJLoader2Parallel } from "three/examples/jsm/loaders/OBJLoader2Parallel";

function App() {
  useEffect(() => {
    (async () => {
      await new Promise((res) =>
        new OBJLoader2Parallel().load(`http://localhost:8080/model.obj`, (model) =>
          res(model)
        )
      );
    })();
  }, []);

  return <div className="App"></div>;
}

export default App;
