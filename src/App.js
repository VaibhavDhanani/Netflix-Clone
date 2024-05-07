// App.js
import React from 'react';
import './App.css';
import MainView from './components/main-section/MainView';
import Header from "./components/header/Header";

function App() {
  
  return (
    <div className="App">
      <Header />
      <MainView />
    </div>
  );
}

export default App;
