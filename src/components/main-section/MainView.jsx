import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import './MainView.css';

const MainView = () => {
  const slides = [
    {
      imageSrc: 'https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg',
      title: 'Demon Slayer',
      description: 'In a world where demons lurk in the shadows, follow Tanjiro Kamado as he embarks on a journey to avenge his family and save his sister from the curse of becoming a demon.',
    },
    {
      imageSrc: 'https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg',
      title: 'Bleach',
      description: 'Discover the magical world of fantasy and adventure in this captivating anime landscape.',
    },
    {
      imageSrc: 'https://c4.wallpaperflare.com/wallpaper/695/331/660/digital-art-artwork-women-cityscape-wallpaper-preview.jpg',
      title: 'Attack on Titan',
      description: 'Experience the bustling cityscape filled with vibrant energy and bustling activity.',
    },
  ];


  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slideLength - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slideLength - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="carousel">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.imageSrc})` }}
          >
            <div className="content">
              <h2 className='text-2xl font-extrabold font-sans' >{slide.title}</h2>
              <p>{slide.description}</p>
              <div className='flex justify-center items-center'>

                <button
                  className="playButton mx-1 bg-white text-black rounded py-2 px-4 font-bold hover:bg-blue-gray-400 focus:outline-none"
                  style={{
                    transition: 'background-color 0.3s',
                    borderColor: '#CBD5E0',
                  }}
                >
                  <PlayArrowIcon className="mr-1" />
                  Play
                </button>
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
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        Prve
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default MainView;