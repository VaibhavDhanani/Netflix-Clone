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

  const addSeason = (e) => {
    e.preventDefault();
    setSeasons([
      ...seasons,
      { seasonNumber: seasons.length + 1, episodes: [] },
    ]);
  };

  const addEpisode = (e, seasonIndex) => {
    e.preventDefault();
    const newSeasons = [...seasons];
    newSeasons[seasonIndex].episodes.push({
      episodeNumber: newSeasons[seasonIndex].episodes.length + 1,
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
        console.log(response);
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

  const areAllVideoUrlsPopulated = (seasons) => {
    for (const season of seasons) {
      for (const episode of season.episodes) {
        if (!episode.videoUrl) {
          return false;
        }
      }
    }
    return true;
  };

  const allVideoUrlsPopulated = areAllVideoUrlsPopulated(seasons);

  return (
    <div className="space-y-6 text-white">
      {seasons.map((season, seasonIndex) => (
        <div
          key={seasonIndex}
          className="dark:bg-gray-800 shadow-md rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Season</h3>
            <input
              type="number"
              value={season.seasonNumber}
              className="text-black px-2 py-1 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(event) => handleSeasonChange(seasonIndex, event)}
            />
          </div>
          <button
            onClick={(e) => addEpisode(e, seasonIndex)}
            className="w-full mt-2 py-2 px-4 bg-blue-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-600"
          >
            Add Episode
          </button>
          <div className="mt-4 space-y-4">
            {season.episodes.map((episode, episodeIndex) => (
              <div
                key={episodeIndex}
                className="dark:bg-gray-600 p-4 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Episode</h4>
                  <input
                    type="number"
                    className="text-black px-2 py-1 rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
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
                </div>
                <label className="block text-left mb-2 text-dark">Video:</label>
                <div className="flex items-center mb-2">
                  <input
                    type="file"
                    id="video"
                    name="video"
                    className="px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="text-black my-2 px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
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
        className={`w-full mt-5 py-2 px-4 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          allVideoUrlsPopulated
            ? "bg-red-500 hover:bg-red-600 focus:ring-red-500"
            : "bg-red-800"
        }`}
        disabled={!allVideoUrlsPopulated}
      >
        Submit
      </button>
    </div>
  );
};

export default SeasonUpload;
