import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const SeasonUpload = (props) => {
  const [seasons, setSeasons] = useState([
    {
      seasonNumber: 1,
      episodes: [
        { episodeNumber: 1, videoUrl: "", video: null, description: "" },
      ],
    },
  ]);

  const addSeason = () => {
    setSeasons([...seasons, { seasonNumber: seasons.length, episodes: [] }]);
  };

  const addEpisode = (seasonIndex) => {
    const newSeasons = [...seasons];
    newSeasons[seasonIndex].episodes.push({
      episodeNumber: newSeasons[seasonIndex].episodes.length,
      videoUrl: "",
      video: null,
      description: "",
    });
    setSeasons(newSeasons);
  };

  const handleSeasonChange = (index, event) => {
    const newSeasons = [...seasons];
    newSeasons[index].seasonNumber = event.target.value;
    setSeasons(newSeasons);
  };

  const handleEpisodeChange = (seasonIndex, episodeIndex, field, event) => {
    const newSeasons = [...seasons];
    const episode = { ...newSeasons[seasonIndex].episodes[episodeIndex] };
    episode[field] =
      field === "videoUrl" ? event.target.value : event.target.value;
    newSeasons[seasonIndex].episodes[episodeIndex] = episode;
    setSeasons(newSeasons);
  };

  const handleVideoChange = (seasonIndex, episodeIndex, e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref("/videos/");
      const fileRef = storageRef.child(selectedFile.name);
      fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadUrl) => {
          const newSeasons = [...seasons];
          const episode = { ...newSeasons[seasonIndex].episodes[episodeIndex] };
          episode.videoUrl = downloadUrl;
          episode.video = selectedFile;
          newSeasons[seasonIndex].episodes[episodeIndex] = episode;
          setSeasons(newSeasons);
        });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(props.formData,additionalData)
    const finalObject = { ...props.formData, seasons };
    // console.dir(finalObject);

    const postData = {
      title: finalObject.title,
      subContent: [
        {
          name: finalObject.name,
          releaseDate: finalObject.releaseDate,
          imageUrl: finalObject.imageUrl,
          description: finalObject.description,
          categories: finalObject.categories,
          totalLikes: finalObject.totalLikes,
          ratings: finalObject.ratings,
          type: "series",
          videoUrl: null,
          seasons: finalObject.seasons,
        },
      ],
    };

    console.dir(postData);

    fetch("http://localhost:5000/api/maincontentupload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((response) => {
      if (!response.ok) {
        console.log(response)
        throw new Error("Network response was not ok");
      }
      setSeasons([
        {
          seasonNumber: 1,
          episodes: [
            { episodeNumber: 1, videoUrl: "", video: null, description: "" },
          ],
        },
      ]);
      return response.json();
    });
  };

  return (
    <div>
      {seasons.map((season, seasonIndex) => (
        <div key={seasonIndex}>
          <h3>
            Season
            <input
              type="number"
              value={season.seasonNumber}
              className="text-black px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(event) => handleSeasonChange(seasonIndex, event)}
            />
          </h3>
          <button
            onClick={() => addEpisode(seasonIndex)}
            className="w-full mt-5 py-2 px-4 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-600"
          >
            Add Episode
          </button>
          {season.episodes.map((episode, episodeIndex) => (
            <div key={episodeIndex}>
              <h4>
                Episode{" "}
                <input
                  type="number"
                  className="text-black px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  value={episode.episodeNumber}
                  onChange={(event) =>
                    handleEpisodeChange(
                      seasonIndex,
                      episodeIndex,
                      "episodeNumber",
                      event
                    )
                  }
                />
              </h4>
              <label className="block text-left mb-2 text-dark">Video:</label>
              <div className="flex items-center mb-2">
                <input
                  type="file"
                  id="video"
                  name="video"
                  className=" px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) =>
                    handleVideoChange(seasonIndex, episodeIndex, e)
                  }
                />
              </div>
              <input
                type="text"
                placeholder="Video URL"
                className="text-black px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                value={episode.videoUrl}
                onChange={(event) =>
                  handleEpisodeChange(
                    seasonIndex,
                    episodeIndex,
                    "videoUrl",
                    event
                  )
                }
              />
              <textarea
                placeholder="Description"
                className="text-black my-4 px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                value={episode.description}
                onChange={(event) =>
                  handleEpisodeChange(
                    seasonIndex,
                    episodeIndex,
                    "description",
                    event
                  )
                }
              />
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={addSeason}
        className="w-full mt-5 py-2 px-4 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-600"
      >
        Add Season
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full mt-5 py-2 px-4 bg-red-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:bg-red-600"
      >
        Submit
      </button>
    </div>
  );
};

export default SeasonUpload;
