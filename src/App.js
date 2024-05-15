import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Profile from "./components/profile/profile";
import HomePage from "./pages/home-page";
import Categorypage from "./pages/category-page";
import SignUp from "./components/SignUp/sign-up";
import SignIn from "./components/SignIn/sign-in";
import Abc from "./checking-backend/abc";
import VideoPlayer from "./components/video-player/video-player";
import MovieForm from "./components/upload-section/uploadContent";
import MovieUpload from "./components/upload-section/movie-upload";
import SeasonUpload from "./components/upload-section/series-upload";
import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";

function App() {
  const [user,setUser] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if(data.session === null) return <Navigate to="/signup" />;
        // console.dir(data);
        setUser(data)
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/node" element={<Abc />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contentupload" element={<MovieForm />} />
          <Route path="/movieform" element={<MovieUpload />} />
          <Route path="/seasonform" element={<SeasonUpload />} />
          <Route path="/video-player" element={<VideoPlayer />} />
          <Route path="/category/:title" element={<Categorypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
