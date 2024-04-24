import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/sidebar";
import App from "./App.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Home.jsx";
// import { App2 } from "./pages/App old";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
