import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import JavaTopics from "./Component/JavaTopics"; // Import JavaTopics page

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JavaTopics" element={<JavaTopics />} /> {/* Add JavaTopics route */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
