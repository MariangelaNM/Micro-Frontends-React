import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./Counter";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <div>Framework: React</div>
    <div>Language: JavaScript</div>
    <div>CSS: Basic Styling</div>
    <Counter></Counter>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
