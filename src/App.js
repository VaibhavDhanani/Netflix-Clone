import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import HomePage from "./pages/home-page";
import Categorypage from "./pages/category-page";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category/:title" element={<Categorypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
