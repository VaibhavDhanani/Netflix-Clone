import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const MovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    imageUrl: "",
    image: null,
    video: null,
    videoUrl: "",
    description: "",
    categories: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref("/images/");
      const fileRef = storageRef.child(selectedFile.name);
      fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadUrl) => {
          console.log(downloadUrl);
          setFormData({
            ...formData,
            imageUrl: downloadUrl,
            image: e.target.files[0],
          });
        });
      });
    }
  };

  const handleVideoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref("/videos/");
      const fileRef = storageRef.child(selectedFile.name);
      fileRef.put(selectedFile).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadUrl) => {
          console.log(downloadUrl);
          setFormData({
            ...formData,
            videoUrl: downloadUrl,
            video: e.target.files[0],
          });
        });
      });
    }
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    const updatedCategories = [...formData.categories];
    if (updatedCategories.includes(value)) {
      updatedCategories.splice(updatedCategories.indexOf(value), 1);
    } else {
      updatedCategories.push(value);
    }
    setFormData({
      ...formData,
      categories: updatedCategories,
    });
  };

  const handleSubmit = (e) => {

    console.log(formData);
    const postData = {
      title: formData.title,
      releaseDate: formData.releaseDate,
      imageUrl: formData.imageUrl,
      videoUrl: formData.videoUrl,
      description: formData.description,
      categories: formData.categories,
    };
  
    fetch('http://localhost:5000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    setFormData({
      title: "",
      releaseDate: "",
      imageUrl: "",
      image: null,
      video: null,
      videoUrl: "",
      description: "",
      categories: [],
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full  dark:bg-gray-950 "
      style={{
        backgroundImage: `url("https://imgs.search.brave.com/RglXnhdOA-ts7fY4xgsCUP0K_C1KQk5nUcVqTbvRdIE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/cnJhbmdlbWVudC1j/aW5lbWEtZWxlbWVu/dHMtYmxhY2stYmFj/a2dyb3VuZC13aXRo/LWNvcHktc3BhY2Vf/MjMtMjE0ODQ1Nzg0/Mi5qcGc_c2l6ZT02/MjYmZXh0PWpwZw")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4 text-red-600 uppercase">
          Add New Movie
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 text-dark">
              Movie Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="releaseDate" className="block mb-2 text-dark">
              Release Date:
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              className=" px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-dark">Image:</label>
            <div className="flex items-center mb-2">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="mr-2 px-2"
              />
              {/* <span className="text-sm text-white">or</span> */}
            </div>
            {/* <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter Image URL"
              className="block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            /> */}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-dark">Video:</label>
            <div className="flex items-center mb-2">
              <input
                type="file"
                id="video"
                name="video"
                onChange={handleVideoChange}
                className="mr-2 px-2"
              />
              {/* <span className="text-sm text-white">or</span> */}
            </div>
            {/* <input
              type="url"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="Enter Video URL"
              className="block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            /> */}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className=" block mb-2 text-dark">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="block px-2 w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categories" className="block mb-2 text-dark">
              Category:
            </label>
            <div className="flex flex-wrap">
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="Action"
                  onChange={handleCategoryChange}
                  className="form-checkbox  text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Action</span>
              </label>
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="Comedy"
                  onChange={handleCategoryChange}
                  className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Comedy</span>
              </label>
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="Drama"
                  onChange={handleCategoryChange}
                  className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Drama</span>
              </label>
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="Thriller"
                  onChange={handleCategoryChange}
                  className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Thriller</span>
              </label>
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="Horror"
                  onChange={handleCategoryChange}
                  className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Horror</span>
              </label>
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="Romance"
                  onChange={handleCategoryChange}
                  className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Romance</span>
              </label>
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="Sci-Fi"
                  onChange={handleCategoryChange}
                  className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">Sci-Fi</span>
              </label>
              <label className="inline-flex items-center text-dark mr-4 mb-2">
                <input
                  type="checkbox"
                  name="categories"
                  value="18+"
                  onChange={handleCategoryChange}
                  className="form-checkbox text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">18+</span>
              </label>
              {/* Add more checkboxes as needed */}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:bg-red-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
