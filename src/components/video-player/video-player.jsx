import React, { useEffect, useRef } from 'react';
import './ab.css';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function VideoPlayer() {
  
  const videoUrl = "https://firebasestorage.googleapis.com/v0/b/flixify-2a99b.appspot.com/o/videos%2FDemon%20Slayer_%20Kimetsu%20no%20Yaiba%20Promotion%20Reel.mp4?alt=media&token=d209a74a-87e8-441b-8c91-3b71c3582f08" 
  return (
   
      <div className="media-player-container">
        
       <div className='media-player-title'>
      <a href='/'> <div className='back-button-media'><KeyboardBackspaceIcon/>Back to Netflix</div></a> 
        <h1 >Netflix Media Player</h1></div>
        <br />
       <center> <video
          className="videoplayer"
          controls
          poster="https://occ-0-3061-3646.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRcPN0QlBFemyXiOLqUHaicdXrSgG3ptqQ6DhOjtmoP9Pq5NkFlmtrMf9ZxDOeivODA7tbnO8pB3upZkWa8rVV45uO9LRZOcSW4.webp?r=27e"
        >
          <source
           
            src={videoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video></center>
        
      </div>
  );
}

export default VideoPlayer;
