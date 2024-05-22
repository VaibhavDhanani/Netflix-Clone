import React, { useState, useEffect } from 'react';
import "./movies.css"
import Header from '../components/header/Header';
import MainView from '../components/main-section/MainView';
import Card from '../components/sub-section/card/card';
import Bigfooter from '../components/footer/Bigfooter';
const Movies=()=>{
  const [subContent, setSubContent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/getallmovies')
      .then(response => response.json())
      .then(data => setSubContent(data))
      .catch(error => console.error('Error fetching subcontent:', error));
  }, []);
  console.log(subContent);
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

  const filteredSubContent = subContent.filter((item) =>
    plansToInclude.includes(item.plan)
  );


return (<div  >
    <Header />
    <MainView/>
     <div>
     <h1 className="title">Movies</h1>
      
      <div className="movies-container">
        {filteredSubContent.map((sub,index) => (
              <Card info={sub} title={sub.name} key={index} />
        ))}
     </div>
    </div>
     <Bigfooter/>
</div>)
}


export default Movies;