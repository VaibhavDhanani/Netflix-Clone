import React from 'react';
import './ab.css';
import { useLocation } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function VideoPlayer() {
  const location = useLocation();
  const { state } = location;
  console.log(location);
 const imageUrl = state.imageUrl;
 const videoUrl = state.videoUrl;

  return (
    <div className="media-player-container">
      <div className='media-player-title'>
        <a href='/'> <div className='back-button-media'><KeyboardBackspaceIcon />Back to Netflix</div></a>
        <h1>Netflix Media Player</h1>
      </div>
      <br />
      <center>
        <video
          className="videoplayer"
          controls
          poster={imageUrl}
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </center>
    </div>
  );
}

export default VideoPlayer;