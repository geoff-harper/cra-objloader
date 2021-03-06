import React, { useEffect } from "react";
import "./App.css";
import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { OBJLoader2Parallel } from "three/examples/jsm/loaders/OBJLoader2Parallel";

function App() {
  useEffect(() => {
    (async () => {
      const model = await new Promise((res) =>
        new OBJLoader2Parallel().load(
          `http://localhost:8080/model.obj`,
          (model) => res(model)
        )
      );
      model.position.set(0, 0, 0);

      const scene = new Scene();
      const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      document.body.appendChild(renderer.domElement);

      scene.add(model);
      camera.position.z = 50;
      camera.lookAt(0, 0, 0);

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    })();
  }, []);

  return <div className="App" />;
}

export default App;
