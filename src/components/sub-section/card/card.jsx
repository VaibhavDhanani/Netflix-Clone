import React, { useEffect, useState } from "react";
import "./card.css";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import Season from "../season/season";
import { useDispatch } from "react-redux";
function Card(props) {
  const [user, setUser] = useState({});
  const {info} = props;
  const [isHovered, setIsHovered] = useState(false);
  const { _id, name, imageUrl, description, ratings, totalLikes, seasons, videoUrl } = props.info;
  const [isClicked, setIsClicked] = useState(false);
  const [isListed, setIsListed] = useState(false);

  const fetchUser = async () => {
    try {
      const userfetch = localStorage.getItem("user");
      if (userfetch) {
        const user = JSON.parse(userfetch);
        const params = new URLSearchParams({ email: user.email });
        const response = await fetch(`http://localhost:5000/api/user?${params}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
        setIsListed(data.mylist && data.mylist.includes(name));
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  },[]);

  const updateUser = async (user) => {
    try {
      const response = await fetch("http://localhost:5000/api/updateuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      setUser(user);
      if (!response.ok) {
        throw new Error("Failed to send user information to the server.");
      }
      console.log("User information sent successfully.");
    } catch (error) {
      console.error("Error sending user information to server:", error.message);
    }
  };

  const toggle = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const [selectedSeasonNumber, setSelectedSeasonNumber] = useState(1);

  const handleSeasonChange = (event) => {
    setSelectedSeasonNumber(event.target.value);
  };

  const handleUserList = async () => {
    if (!isListed) {
      const newList = [...user.mylist, name];
      const userDataToSend = { ...user, mylist: newList };
      try {
        const response = await fetch("http://localhost:5000/api/updateuserlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDataToSend),
        });
        if (!response.ok) {
          throw new Error("Failed to send user information to the server.");
        }
        console.log("User information sent successfully.");
        fetchUser();
      } catch (error) {
        console.error("Error sending user information to server:", error.message);
      }
    }
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
                <button className="circular-button"> 
                <Link
                  to={"/video-player"}
                  state={{ info: props.info }}>
                  <PlayArrowIcon />

                </Link></button>
                <button onClick={handleUserList} className={` ${isListed ? 'circular-buttonactive' : 'circular-button'}  `} title={`${!isListed ? "Add to list" : "Remove from list"}`} ><AddIcon></AddIcon></button>
                {/* <button className="circular-button"><ThumbUpOffAltIcon></ThumbUpOffAltIcon></button> */}
                <button onClick={toggle} className="circular-buttonl" {...(seasons ? { title: "show all episodes" } : {})}>
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
                {seasons && isClicked && (
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
                    {seasons && (
                      <Season
                        season={info.seasons[selectedSeasonNumber - 1]}
                      />
                    )}
                  </div>
                )}
                {isClicked && !seasons && (
                  <div className="w-96 text-left  text-pretty p-5">
                    <p>{description}</p>
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
