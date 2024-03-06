// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Login copy/Register";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import "./App.css";
import Test from "./pages/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<Error />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
