import React, { useState } from "react";
import "./card.css";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom"; // Import Link

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { name, imageUrl, ratings, totalLikes, seasons, videoUrl } = props.info;

  return (
    <div className="imageContainer"
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} className="image" />
      {isHovered && (
        <div className="additionalInfo">
          <div className="info-container">
            <div className="imgcon">
              <img src={imageUrl} className="infoimg" />
            </div>
            <div className="information">
              <div class="button-container">
                <button class="circular-button"> <Link
                  to={"/video-player"}
                  state={{imageUrl :`${imageUrl}` , videoUrl : `${videoUrl}`}}>
                   <PlayArrowIcon />
                
                </Link></button>
                <button class="circular-button"><AddIcon></AddIcon></button>
                <button class="circular-button"><CloseIcon></CloseIcon></button>
                <button class="circular-button"><ThumbUpOffAltIcon></ThumbUpOffAltIcon></button>
                <button class="circular-buttonl"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
              </div>
              <div className="flex flex-col">
                <p className="moviename">{name}</p>
                {seasons ? <div className="season">{seasons} seasons</div> : ''}
                <div className="hashtags">
                  <p>Likes : {totalLikes}</p>
                  <p>{ratings} / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
