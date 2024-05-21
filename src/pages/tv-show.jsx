import React from "react";
import Navbar from "../components/header/Navbar";
import MainView from "../components/main-section/MainView";
import Section from "../components/sub-section/section/section";
import Header from "../components/header/Header";
import Category from '../components/Category/category';
import Bigfooter from "../components/footer/Bigfooter";
import "./tv-show.css";
const title="IndianTV"
const titleToShow = "TV-Shows"
const TvShow=()=>{
return (<div>
    <Header/>
    <MainView/>
    <Category title={title} titleToShow={titleToShow}/>
      <Bigfooter/>
</div>)
}


export default TvShow;