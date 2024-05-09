import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import './ab.css'; // assuming you have a CSS file for styling

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function VideoPlayer() {
  

  return (
   
      <div className="media-player-container">
        
       <div className='media-player-title'>
      <a href='/'> <div className='back-button-media'><KeyboardBackspaceIcon/>Back to Netflix</div></a> 
        <h1 >Netflix Media Player</h1></div>
        <br />
       <center> <video
          className="videoplayer"
          controls
          poster="https://firebasestorage.googleapis.com/v0/b/flixify-2a99b.appspot.com/o/images%2Fwallpaperflare.com_wallpaper.jpg?alt=media&token=bb09975e-d03a-4ec6-928f-430481c20eb8"
        >
          <source
           
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video></center>
        
      </div>
  );
}

export default VideoPlayer;
