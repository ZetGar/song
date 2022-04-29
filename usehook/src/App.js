import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Gate from "./pages/Gate";
import HookuseState from "./pages/HookuseState";
import Time from "./pages/Time";
import Input from "./pages/Input";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Gate />} />
        <Route exact path="/useState" element={<HookuseState />} />
        <Route exact path="/useState/Time" element={<Time />} />
        <Route exact path="/useState/Input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
