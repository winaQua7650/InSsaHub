import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aframe from "./pages/Aframe";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/office" element={<Aframe />}></Route>
          <Route path="/join" element={<Join />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
