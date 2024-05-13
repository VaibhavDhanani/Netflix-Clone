import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import MovieUpload from "./movie-upload";
import SeasonUpload from "./series-upload";
// import MovieUpload from "./movie-upload";
// import SeasonUpload from "./season-upload";

const MovieForm = () => {
  const [formData, setFormData] = useState({
    title: null,
    name: null,
    releaseDate: null,
    imageUrl: null,
    image: null,
    description: null,
    categories: [],
    totalLikes: 0,
    ratings: 0,
    type: "movie",
    videoUrl: null,
    video: null,
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
          setFormData({
            ...formData,
            imageUrl: downloadUrl,
            image: selectedFile,
          });
        });
      });
    }
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const updatedCategories = checked
      ? [...formData.categories, value]
      : formData.categories.filter((category) => category !== value);
    setFormData({
      ...formData,
      categories: updatedCategories,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submit logic here
    setFormData({
      title: null,
      name: null,
      releaseDate: null,
      imageUrl: null,
      image: null,
      description: null,
      categories: [],
      totalLikes: 0,
      ratings: 0,
      type: "movie",
      videoUrl: null,
      video: null,
    });
  };

  const movieTitles = [
    "Anime",
    "K-Dramas",
    "IndianTV",
    "Hollywood",
    "Biography",
    "Sports",
    "FamiliyTV",
    "Kid'sTV",
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full  dark:bg-gray-950 text-white"
      style={{
        backgroundImage: `url("https://imgs.search.brave.com/RglXnhdOA-ts7fY4xgsCUP0K_C1KQk5nUcVqTbvRdIE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/cnJhbmdlbWVudC1j/aW5lbWEtZWxlbWVu/dHMtYmxhY2stYmFj/a2dyb3VuZC13aXRo/LWNvcHktc3BhY2Vf/MjMtMjE0ODQ1Nzg0/Mi5qcGc_c2l6ZT02/MjYmZXh0PWpwZw")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-red-600 uppercase">
          Add New Content
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 text-dark">
              Movie Title:
            </label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-black px-2 py-1"
              required
            >
              <option value="">Select Movie Title</option>
              {movieTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-dark">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-black px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
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
              className="text-black px-2 block w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 text-dark">Image:</label>
            <div className="flex items-center mb-2">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="mr-2 px-2"
              />
            </div>
            <span className="text-sm text-white">or</span>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter Image URL"
              className="block text-black w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
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
              className="text-black block px-2 w-full rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
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
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block mb-2 text-dark">
              Content Type:
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="block w-full text-black rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 px-2 py-1"
              required
            >
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>

          {formData.type === "movie" ? (
            <MovieUpload formData={formData} />
          ) : (
            <SeasonUpload formData={formData} />
          )}
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
