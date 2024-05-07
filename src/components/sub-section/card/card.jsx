import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

function Card() {
  const [isHovered, setIsHovered] = useState(false);

  const image = require('../../../images/car1.jpg'); // Adjust path as needed

  return (
    <div className={`card max-w-xs mx-auto w-md ${isHovered ? 'max-w-md': ''}`}>
      <div
        className="imageContainer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt="Car"
          className="image"
        />
        {isHovered && (
          <div className="additionalInfo absolute inset-0 flex items-center justify-center bg-black h-64">
            <div className="info-container text-white text-center">
              <div className="imgcon">
                <img
                  src={image}
                  alt="Car"
                  className="infoimg"
                />
              </div>
              <div className="button-container flex justify-center mt-4 py-4">
                <button className="mx-1 p-2 bg-gray-800 rounded-full">
                  <PlayArrowIcon />
                </button>
                <button className="mx-1 p-2 bg-gray-800 rounded-full">
                  <AddIcon />
                </button>
                <button className="mx-1 p-2 bg-gray-800 rounded-full">
                  <CloseIcon />
                </button>
                <button className="mx-1 p-2 bg-gray-800 rounded-full">
                  <ThumbUpOffAltIcon />
                </button>
                <button className="mx-1 p-2 bg-gray-800 rounded-full">
                  <KeyboardArrowDownIcon />
                </button>
              </div>
              <div className="season text-xs">9 seasons</div>
              <div className="hashtags text-xs">#hashtag1 #hashtag2 #hashtag3</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
