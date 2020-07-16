import React from "react";
import RocketsList from "./components/RocketsList";
import "./App.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">SpaceX Rockets</h1>
      <RocketsList />
    </div>
  );
}

export default App;
