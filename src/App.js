import React, { useEffect, useState } from "react";
import "./App.css";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/profile/profile";
import HomePage from "./pages/home-page";
import Categorypage from "./pages/category-page";
import SignIn from "./components/SignIn/sign-in";
import VideoPlayer from "./components/video-player/video-player";
import MovieForm from "./components/upload-section/uploadContent";
import MovieUpload from "./components/upload-section/movie-upload";
import SeasonUpload from "./components/upload-section/series-upload";
import Cancelpayment from "./components/SignUp/cancel-payment";
import SignupPage from "./components/SignUp/signup-page";
import { Provider } from "react-redux";
import UserList from "./pages/userList";
import TvShow from "./pages/tv-show";
import Movies from "./pages/movies-page";
import Newpopular from "./pages/new-popular";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/home" /> : <SignIn />}
            />
            <Route
              path="/signup"
              element={isLoggedIn ? <Navigate to="/home" /> : <SignupPage />}
            />
            <Route
              path="/home"
              element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/my-list"
              element={<UserList />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route path="/contentupload" element={<MovieForm />} />
            <Route
              path="/movieform"
              element={isLoggedIn ? <MovieUpload /> : <Navigate to="/" />}
            />
            <Route path="/seasonform" element={<SeasonUpload />} />
            <Route
              path="/video-player"
              element={<VideoPlayer />}
            />
            <Route path="/category/:title" element={<Categorypage />} />
            <Route
              path="/cancel"
              element={isLoggedIn ? <Cancelpayment /> : <Navigate to="/" />}
            />
            <Route
              path="/tv-shows"
              element={isLoggedIn ? <TvShow /> : <Navigate to="/" />}
            />
            <Route
              path="/movies"
              element={isLoggedIn ? <Movies /> : <Navigate to="/" />}
            />
            <Route
              path="/newpopular"
              element={isLoggedIn ? <Newpopular /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
