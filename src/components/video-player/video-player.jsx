import React, { useState } from 'react';
import './ab.css';
import { useLocation, useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function VideoPlayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);
  let videoUrl = state.info.videoUrl;
  let episodes = [];
let title = state.info.name;

console.log(title);

let fullname = title;
  if (state.info.seasons && state.info.seasons.length > 0) {
    episodes = state.info.seasons[currentSeasonIndex].episodes;
    console.log("we are printing episodes")
    console.log(episodes)
    console.log(currentEpisodeIndex + " episodes")
    videoUrl = episodes[currentEpisodeIndex].videoUrl;
    fullname += " S:"+ (currentSeasonIndex+1) + " E:" + (currentEpisodeIndex+1);
  }

  const handlePrevious = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }else {
      console.log("we are in else part");
      setCurrentEpisodeIndex(0);
      if(currentSeasonIndex > 0 ) {
      setCurrentSeasonIndex(currentSeasonIndex -1);
    }}
  };
  
  const handleNext = () => {
    if (currentEpisodeIndex < episodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }else {
      console.log("we are in else part");
      setCurrentEpisodeIndex(0);
      if(currentSeasonIndex < state.info.seasons.length -1 ) {
      setCurrentSeasonIndex(currentSeasonIndex + 1);
    }}
  };

  return (
    <div className="media-player-container">
      <div className="media-player-title">
        <a href="/">
          <div className="back-button-media">
            <KeyboardBackspaceIcon />
            Back to Netflix
          </div>
        </a>
        <h1>Netflix Media Player</h1>
      </div>
      <br />
      <center>
        <h1>{fullname}</h1>
        <video
          className="videoplayer"
          controls
          poster={state.imageUrl}
          src={videoUrl} // Change videoUrl here
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-center mt-4">
          {state.info.seasons && (
            <>
              <button
                className="nextepisodebutton"
                onClick={handlePrevious}
                
              >
                Perv Episode
              </button>
              <button
                className="prevepisdoebutton"
                onClick={handleNext}
               
              >
               Next Episode 
              </button>
            </>
          )}
        </div>
      </center>
    </div>
  );
}

export default VideoPlayer;
