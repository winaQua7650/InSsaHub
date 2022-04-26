// import { useEffect } from "react";
import swal from "sweetalert";
// const test = "/images/test_img2.png";
const testModel = "/images/test_model.gltf";

function App() {
  const localData = localStorage.getItem("name");
  const nickName = JSON.parse(localData);

  swal({
    text: `환영합니다! ${nickName}님, 
    방향키를 움직여보세요!`,
    icon: "success",
  });

  return (
    <a-scene>
      <a-entity environment="preset: forest">
        <a-entity gltf-model={testModel}></a-entity>
        <a-text value={nickName} position="1 1 1"></a-text>
      </a-entity>
    </a-scene>
  );
}
export default App;
