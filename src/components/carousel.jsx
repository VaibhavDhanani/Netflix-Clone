// Carousel.js
import React, { useState } from 'react';
import './Carousel.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  

  return (
    <div className="Carousel">
      <div className="imgdiv" style={{backgroundImage:`url(${images[currentImageIndex]})`}}> 
      {/* <button onClick={prevSlide}>Next</button>
      <button onClick={nextSlide}>Next</button> */}
      <div className="logo"></div>
       <div className="buttonsContainer">
      <button className="playButton">
             <PlayArrowIcon/>
                Play
            </button>
            <button className="infoButton">
                <InfoIcon/>
                More Info
            </button>
            </div>
            <div className="slideIndicators">
        {images.map((image, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
     </div>
     </div>
  );
};

export default Carousel;
