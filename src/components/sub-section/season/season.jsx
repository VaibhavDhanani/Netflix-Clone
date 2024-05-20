import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Season = ({ season, info }) => {
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
              src={ep.videoUrl}
            // onPlay={() => handleVideoPlay(ep.videoUrl,ep.episodeNumber)}
            >

              Your browser does not support the video tag.
            </video>
          </div>
          <Link
            to={"/video-player"}
            state={{
              episodeNumber: ep.episodeNumber - 1,
              seasonNumber: seasonNumber - 1,
              info: info
            }}>
            <div className="mx-4 flex flex-col justify-start align-top" >
              <p className="text-base font-semibold text-left">
                Chapter {ep.episodeNumber}
              </p>
              <p style={{  textDecoration: 'underline', cursor: 'pointer' }}>Watch now </p>

              <p className="text-sm">{ep.description}</p>
            </div></Link>
        </div>
      ))}
    </div>
  );
};

export default Season;