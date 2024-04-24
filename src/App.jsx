import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Production from "./pages/Production.jsx";
import HSE from "./pages/HSE.jsx";
import Cybersecurity from "./pages/Cybersecurity.jsx";
import AssetsPerformance from "./pages/AssetsPerformance.jsx";
import Sustainability from "./pages/Sustainability.jsx";
import SocialActivities from "./pages/SocialActivities.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { RootContext, initialState, reducer } from "./store";
import "./index.css";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // function testFun(input) {
  //   setSelectedView(input);
  // }
  return (
    <RootContext.Provider value={{ ...state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Production" element={<Production />}></Route>
          <Route path="/HSE" element={<HSE />}></Route>
          <Route path="/Cybersecurity" element={<Cybersecurity />}></Route>
          <Route
            path="/Assets-Performance"
            element={<AssetsPerformance />}
          ></Route>
          <Route path="/Sustainability" element={<Sustainability />}></Route>
          <Route
            path="/Social-Activities"
            element={<SocialActivities />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RootContext.Provider>
  );
}
