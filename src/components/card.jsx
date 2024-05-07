import React, { useState } from "react";
import "./card.css";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
function Card() {
  const images = [
    require('../images/car1.jpg'),
    require('../images/car1.jpg'),
    require('../images/car1.jpg'),
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="card">
      {images.map((image, index) => (
        <div
          key={index}
          className="imageContainer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image}
            alt={`Image ${index}`}
            className="image"
          />
          {hoveredIndex === index && (
            <div className="additionalInfo">
              <div className="info-container">
                <div className="imgcon">
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="infoimg"
                  />
                </div>
                <div className="information">
                  <div class="button-container">
                    <button class="circular-button"><PlayArrowIcon></PlayArrowIcon></button>
                    <button class="circular-button"><AddIcon></AddIcon></button>
                    <button class="circular-button"><CloseIcon></CloseIcon></button>
                    <button class="circular-button"><ThumbUpOffAltIcon></ThumbUpOffAltIcon></button>
                    <button class="circular-buttonl"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
                  </div>
                  <div class="season">9 season</div>
                  <div class="hashtags">#hashtag1 #hashtag2 #hashtag3</div>
                </div>
              </div>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default Card;
