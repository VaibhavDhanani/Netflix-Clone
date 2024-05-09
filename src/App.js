import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import HomePage from "./pages/home-page";
import Categorypage from "./pages/category-page";
import SignUp from "./components/SignUp/sign-up";
import SignIn from "./components/SignIn/sign-in";
import MovieForm from "./firebase/movie-upload-form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie" element={<MovieForm />} />
          <Route path="/category/:title" element={<Categorypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
