function App() {
  const duck = "/images/duck.gltf";
  const fox = "/images/fox.gltf";

  return (
    <div>
      <a-scene>
        {/* <a-entity
          camera="active: true"
          wasd-controls="acceleration:65"
          position="0 1 0"
          look-controls
        >
          <a-entity
            gltf-model={fox}
            scale="0.01 0.01 0.01"
            position="0 -0.85 0"
            rotation="0 180 0"
          ></a-entity>
        </a-entity> */}
        <a-entity
          camera="active: true"
          wasd-controls="acceleration:65"
          position="0 1 0"
          look-controls
        >
          <a-entity
            gltf-model={duck}
            scale="1 1 1"
            position="0 -1 0"
          ></a-entity>
        </a-entity>

        <a-box position="-1 1.6 -5" color="tomato"></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        ></a-cylinder>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </div>
  );
}
export default App;
