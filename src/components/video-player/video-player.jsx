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
  console.log(state)
  
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const episodes = state.episodes;
  const currentEpisode = episodes[currentEpisodeIndex];

  const handlePrevious = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentEpisodeIndex < episodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  };

  console.log(episodes)
  

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
        <video
          className="videoplayer"
          controls
          poster={currentEpisode.imageUrl}
        >
          <source src={currentEpisode.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={handlePrevious}
            disabled={currentEpisodeIndex === 0}
          >
            <ArrowBackIosNewIcon />
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={handleNext}
            disabled={currentEpisodeIndex === episodes.length - 1}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </center>
    </div>
  );
}

export default VideoPlayer;