import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RenderGltfs from "./pages/RenderGltfs";
import BasketballGame from "./pages/BasketballGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gltfs" element={<RenderGltfs />} />
        <Route path="/game" element={<BasketballGame />} />
      </Routes>
    </Router>
  );
}

export default App;
