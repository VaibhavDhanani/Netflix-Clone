import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

function Card(props) {
  // console.log(props)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const { id, name, imageUrl, ratings, totalLikes, totalSeasons } = props.info;

  return (
    <div className="card max-w-xs mx-1 my-10 relative h-60">
      <div
        className={`imageContainer ${isHovered ? 'scale-125 z-10' : ''
          } transition-transform duration-500`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageUrl} alt="Car" className={`image rounded-lg`} />
        {isHovered && (
          <div className="additionalInfo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg">
            <div className="info-container text-white text-center">
              <div className="imgcon">
                <img src={imageUrl} alt="Car" className="infoimg rounded-lg" />
              </div>
              <div className="button-container flex justify-center mt-4 bg-black">
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
              <div className="season text-xs">{totalSeasons} seasons</div>
              <div className="hashtags text-xs">
                <p>{name}</p>
                <p>{totalLikes}</p>
                <p>{ratings} / 5.0</p>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;