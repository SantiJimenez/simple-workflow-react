import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BuildingGif from "./media/animations/building.gif";

import Animation from "./components/LottieAnimation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is the v1.2.1!</p>
        <Animation />
      </header>
    </div>
  );
}

export default App;
