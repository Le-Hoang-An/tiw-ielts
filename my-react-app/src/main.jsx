import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Register from "./pages/register";
import Home from "./pages/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home></Home>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
