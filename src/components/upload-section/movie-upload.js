import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const MovieUpload = (props) => {
  const [additionalData, setAdditionalData] = useState({
    videoUrl: "",
    video: null,
    seasons: null,
  });

  const handleVideoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref("/videos/");
      const fileRef = storageRef.child(selectedFile.name);
      fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadUrl) => {
          console.log(downloadUrl);
          setAdditionalData({
            ...additionalData,
            videoUrl: downloadUrl,
            video: e.target.files[0],
          });
        });
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData({
      ...additionalData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(props.formData,additionalData)
    const finalObject = { ...props.formData, ...additionalData };
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
          plan: finalObject.plan,
          totalLikes: finalObject.totalLikes,
          ratings: finalObject.ratings,
          type: "movie",
          videoUrl: finalObject.videoUrl,
          seasons: null,
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
        throw new Error("Network response was not ok");
      }
      setAdditionalData({
        videoUrl: "",
        video: null,
        seasons: null,
      });
      return response.json();
    });
    
  };

  return (
    <div>
      <label className="block mb-2 text-dark">Video:</label>
      <div className="flex items-center mb-2">
        <input
          type="file"
          id="video"
          name="video"
          onChange={handleVideoChange}
          className="mr-2 px-2"
        />
      </div>
      <span className="text-sm text-white">or</span>
      <input
        type="url"
        id="videoUrl"
        name="videoUrl"
        onChange={handleChange}
        value={additionalData.videoUrl}
        placeholder="Enter Video URL"
        className="block text-black w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
      />

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

export default MovieUpload;
