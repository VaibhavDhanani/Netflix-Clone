// App.js
import React from 'react';
import './App.css';
import MainView from './components/main-section/MainView';
import Header from "./components/header/Header";
import Card from "./components/card";
function App() {
  
  return (
    <div className="App">
      <Header />
      <MainView />
      <Card/>
    </div>
  );
}

export default App;
