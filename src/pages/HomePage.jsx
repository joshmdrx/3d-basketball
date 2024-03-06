import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/gltfs">
        <button>Go to GLB Models</button>
      </Link>
      <Link to="/game">
        <button>Go to Interactive Models</button>
      </Link>
    </div>
  );
}

export default HomePage;
