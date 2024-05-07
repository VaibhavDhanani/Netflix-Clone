import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainView from './components/main-section/MainView';
import Header from "./components/header/Header";

import Profile from './components/profile'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={
          <MainView />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
