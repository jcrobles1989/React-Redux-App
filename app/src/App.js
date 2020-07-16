import React from "react";
import RocketsList from "./components/RocketsList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">SpaceX Rockets</h1>
      </div>
      <RocketsList />
    </div>
  );
}

export default App;
