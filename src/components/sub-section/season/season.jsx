import React from 'react';
import { useNavigate } from 'react-router-dom';

const Season = ({ season }) => {
  const { seasonNumber, episodes } = season;
  const navigate = useNavigate();

  // const handleVideoPlay = (videoUrl,episodeNumber) => {
  //   navigate('/video-player', { state: { videoUrl,episodeNumber, episodes } });
  // };

  return (
    <div className="grid grid-cols-1 gap-4 bg-transparent">
      {episodes.map((ep) => (
        <div
          key={ep.id}
          className="w-fit text-white rounded-lg p-2 flex flex-start mb-4"
        >
          <div>
            <video
              controls
              className="w-40 rounded-lg shadow-md"
              // onPlay={() => handleVideoPlay(ep.videoUrl,ep.episodeNumber)}
            >
              <source src={ep.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mx-4 flex flex-col justify-start align-top">
            <p className="text-base font-semibold text-left">
              Chapter {ep.episodeNumber}
            </p>
            <p className="text-sm">{ep.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Season;