import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Profile from "./components/profile/profile";
import HomePage from "./pages/home-page";
import Categorypage from "./pages/category-page";

import SignIn from "./components/SignIn/sign-in";
import Abc from "./checking-backend/abc";
import VideoPlayer from "./components/video-player/video-player";
import MovieForm from "./components/upload-section/uploadContent";
import MovieUpload from "./components/upload-section/movie-upload";
import SeasonUpload from "./components/upload-section/series-upload";
import Cancelpayment from "./components/SignUp/cancel-payment";
import SignupPage from "./components/SignUp/signup-page";



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/node" element={<Abc />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contentupload" element={<MovieForm />} />
          <Route path="/movieform" element={<MovieUpload />} />
          <Route path="/seasonform" element={<SeasonUpload />} />
          <Route path="/video-player" element={<VideoPlayer />} />
          <Route path="/category/:title" element={<Categorypage />} />
          <Route path="/cancel" element={<Cancelpayment/>} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
