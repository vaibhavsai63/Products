import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./App";
import { Service } from "./components/Service";
import { Counter } from "./components/Counter";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/Counter" element={<Counter/>} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
