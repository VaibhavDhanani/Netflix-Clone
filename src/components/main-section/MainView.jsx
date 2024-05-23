import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import './MainView.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';

const MainView = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:5000/api/getmaincontent');
        const jsonData = await result.json();

        const uniqueSlides = [];
        while (uniqueSlides.length < 3) {
          const randomMainContent = jsonData[Math.floor(Math.random() * jsonData.length)];
          const randomSubContent = randomMainContent.subContent[Math.floor(Math.random() * randomMainContent.subContent.length)];
        // console.log(randomSubContent)
          if (!uniqueSlides.some(slide => slide.title === randomMainContent.title)) {
            uniqueSlides.push({
              imageUrl: randomSubContent.imageUrl,
              title: randomMainContent.title,
              description: randomSubContent.description,
              videoUrl: randomSubContent.videoUrl,
              seasons:randomSubContent.seasons,
            });
          }
        }
        
        setSlides(uniqueSlides);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slideLength - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slideLength - 1 : prevIndex - 1));
  };
// console.log(slides)
  return (
    <div className="carousel">
      <div className="slide-container">
        {slides.map((slide, index) => (
        
          <div
            key={index}
            className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: 'contain', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat'  
            }}
          >
            <div className="content">
              <h2 className='carousel-title'>{slide.title}</h2>
              <p className='carousel-description'>{slide.description}</p>
            </div>
            <div className='play-button-container'>
            <Link
               to={"/video-player"}
               state={{
                 episodeNumber: 0,
                  seasonNumber: 0, 
                 info: slides[currentSlideIndex]
               
               }}>  
              <button
                className="playButton mx-1 bg-white text-black rounded py-2 px-4 font-bold hover:bg-blue-gray-400 focus:outline-none"
                style={{
                  transition: 'background-color 0.3s',
                  borderColor: '#CBD5E0',
                }}
              >
                
                <PlayArrowIcon className="mr-1" />
                Play  
              </button></Link>
              <button
                className="infoButton mx-1 bg-slate-600 text-black rounded py-2 px-4 font-bold hover:bg-blue-gray-400 focus:outline-none"
                style={{
                  transition: 'background-color 0.3s',
                  borderColor: '#CBD5E0',
                }}
              >
             <InfoIcon className="mr-1" />
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        <ArrowBackIosNewIcon />
      </button>
      <button className="next" onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default MainView;
