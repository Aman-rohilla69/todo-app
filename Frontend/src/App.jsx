import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import NotFound.jsx from "./Components/NotFound.jsx";
import { Toaster } from "react-hot-toast";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
function App() {
  const token = localStorage.getItem("jwt");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={token ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound.jsx />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
