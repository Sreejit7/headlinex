import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </Router>,
  document.getElementById("root")
);
