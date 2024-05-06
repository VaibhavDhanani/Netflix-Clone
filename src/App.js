// App.js
import React from 'react';
import './App.css';
import Carousel from './components/carousel';
import Header from "./components/header/Header";

function App() {
  const images = [
    require('./images/car1.jpg'),
    require('./images/car2.webp'),
    require('./images/car3.webp')
  ];

  return (
    <div className="App">
      <Header />
      <Carousel images={images} />
    </div>
  );
}

export default App;
