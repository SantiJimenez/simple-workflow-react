import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BuildingGif from "./media/animations/building.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is the v1.0.1!</p>
        <img src={BuildingGif} alt="building" />
        <p>We are already!</p>
      </header>
    </div>
  );
}

export default App;
