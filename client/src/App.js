import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aframe from "./pages/Aframe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/office" element={<Aframe />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
