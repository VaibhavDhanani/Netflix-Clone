import React, { useState } from "react";
import "./card.css";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import Season from "../season/season";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { name, imageUrl, ratings, totalLikes, seasons, videoUrl } = props.info;
  const [isClicked, setIsClicked] = useState(false);

  const toogle = () => {
    setIsClicked(!isClicked)
  }
  // console.dir(seasons)

  const [selectedSeasonNumber, setSelectedSeasonNumber] = useState(1);

  const handleSeasonChange = event => {
    // Update the selected season number when the user selects a season
    setSelectedSeasonNumber(event.target.value);
  };


  return (
    <div className="imageContainer"
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false); setIsClicked(false) }}
    >
      <img src={imageUrl} className="image" />
      {isHovered && (
        <div className="additionalInfo">
          <div className="info-container">
            <div className="imgcon">
              <img src={imageUrl} className="infoimg" />
            </div>
            <div className="information">
              <div className="button-container">
                <button className="circular-button"> <Link
                  to={"/video-player"}
                  state={{ imageUrl: `${imageUrl}`, videoUrl: `${videoUrl}` }}>
                  <PlayArrowIcon />

                </Link></button>
                <button className="circular-button" title="Add to my list" ><AddIcon></AddIcon></button>
                <button className="circular-button"><ThumbUpOffAltIcon></ThumbUpOffAltIcon></button>
                <button onClick={toogle} className="circular-buttonl" {...(seasons ? { title: "show all episodes" } : {})}>
                  <KeyboardArrowDownIcon />
                </button>


              </div>
              <div className="flex flex-col">
                <p className="moviename">{name}</p>
                {seasons && (
                  <div className="season">{seasons.length} seasons</div>
                )}
                <div className="hashtags">
                  <p>Likes: {totalLikes}</p>
                  <p>{ratings} / 5.0</p>
                </div>
                {isClicked && (
                  <div className="text-base text-black bg-transparent">
                    {seasons && (
                      <div className="season">
                        <select id="title"
                          name="title"
                          className=" w-28 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-black px-2 py-1"
                          required
                          value={selectedSeasonNumber} 
                          onChange={handleSeasonChange}>
                          {seasons.map(season => (
                            <option key={season.seasonNumber} value={season.seasonNumber}>
                              Season {season.seasonNumber}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    {selectedSeasonNumber && (
                      <Season
                        season={seasons[selectedSeasonNumber - 1]}
                      />
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
