import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./dongsu/Counter";

function App() {
  return (
    <Routes>
      <Route path="ds" element={<Counter />} />
      <Route path="sy" />
      <Route path="yl" />
    </Routes>
  );
}

export default App;
