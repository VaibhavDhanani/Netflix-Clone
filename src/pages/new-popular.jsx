import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Bigfooter from "../components/footer/Bigfooter";
import MainView from "../components/main-section/MainView";
import "./newpopular.css";
import Card from "../components/sub-section/card/card";
import CircularProgress from '@mui/material/CircularProgress';
const Newpopular = () => {
  const [newPopularSubContent, setNewPopularSubContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewPopularSubContent();
  }, []);

  const fetchNewPopularSubContent = async () => {
    try {
      const response = await fetch("/api/getnewpopular");
      const data = await response.json();
      const currentDate = new Date();
      const oneYearAgo = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
      const filteredSubContent = data.filter(sub => (new Date(sub.releaseDate) >= oneYearAgo) && (sub.ratings > 5.0));
      setNewPopularSubContent(filteredSubContent);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching new popular subcontent:", error);
      setLoading(false); 
    }

  };
  const userPlan = JSON.parse(localStorage.getItem('user')).plan; 

  let plansToInclude;
  switch (userPlan) {
    case "premium":
      plansToInclude = ["basic", "special", "pro", "premium"];
      break;
    case "pro":
      plansToInclude = ["basic", "special", "pro"];
      break;
    case "special":
      plansToInclude = ["basic", "special"];
      break;
    case "basic":
      plansToInclude = ["basic"];
      break;
    default:
      return res.status(400).json({ error: "Invalid plan specified." });
  }

  const filteredSubContent = newPopularSubContent.filter((item) =>
    plansToInclude.includes(item.plan)
  );




  return (
    <div>
      <Header />
      <MainView/>
      <h1 className="title">New & Popular</h1>
      {loading ? (
        <div className="loadernew">
        <CircularProgress color="primary" />
        </div>
      ) : (
      <div className="new-popular-container">
        {filteredSubContent.map((sub,index) => (
           <Card info={sub} title={sub.name} key={index} />
        ))}
      </div>
      )}
      <Bigfooter />
    </div>
  );
};

export default Newpopular;
