import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ForgotPassword from "./Components/ForgotPassword";
import Dashboard from "./Components/Dashboard";
import ResetPassword from "./Components/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset_password/:id/:token" element={<ResetPassword />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
