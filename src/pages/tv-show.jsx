import React, { useEffect, useState } from "react";
import MainView from "../components/main-section/MainView";
import Header from "../components/header/Header";
import Bigfooter from "../components/footer/Bigfooter";
import Card from "../components/sub-section/card/card";
import CircularProgress from '@mui/material/CircularProgress';
import "./tv-show.css";
const title = "IndianTV"
const titleToShow = "TV-Shows"
const TvShow = () => {

  const [seriesData, setSeriesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let plan = JSON.parse(localStorage.getItem('user')).plan;
        const params = new URLSearchParams({ plan });
        const response = await fetch(`/api/maincontent/${title}?${params}`);
        const data = await response.json();
        console.log(data);
        setSeriesData(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching series data:", error);
        setLoading(false)
      }
    };

    fetchData();
  }, [title]);

  return (<div>
    <Header />
    <MainView />
    <h1 className="title">TV-Show</h1>
   
    {loading ? (
      <div className="loadernew">
        <CircularProgress color="primary" />
      </div>
    ) : (
      <div className="tv-show-container">
        {seriesData &&
          seriesData.subContent &&
          seriesData.subContent.map((content, index) => (
            <Card info={content} title={content.name} key={index} />
          ))}

      </div>
    )}
    <Bigfooter />
  </div>)
}


export default TvShow;