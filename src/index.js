import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import JavaTopics from "./Component/JavaTopics"; 
 
import GeminiChat from "./Component/Component2/GeminiChat ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JavaTopics" element={<JavaTopics />} />
        <Route path="/chat" element={<GeminiChat />} />
         
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
