const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ users: ["jhonny", "joh", "janardan"] });
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  city: String,
  plan: String,
  address: String,
  password: String,
});

const MainContent = new mongoose.Schema({
  title: String,
  subContent: [
    {
      name: String,
      releaseDate: String,
      imageUrl: String,
      description: String,
      categories: [String],
      totalLikes: Number,
      ratings: Number,
      type: {
        type: String,
        enum: ["movie", "series"],
      },
      videoUrl: {
        type: String,
        required: () => {
          return this.type === "movie";
        },
      },
      seasons: [
        {
          seasonNumber: Number,
          episodes: [
            {
              episodeNumber: Number,
              videoUrl: String,
              description: String,
            },
          ],
        },
      ],
    },
  ],
});
const MainContentModel = mongoose.model("maindatas", MainContent);
const UserModel = mongoose.model("users", UserSchema);

app.get("/getdata", (req, res) => {
  UserModel.find({})
    .then(function (user) {
      res.json(user);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/user", (req, res) => {

  const userData = req.body;
  console.log("Received user data:", userData);
  const newUser = new UserModel();
  newUser.name = userData.displayName;
  newUser.email = userData.email;
  newUser.phone = userData.mobile;
    newUser.city = userData.city;
    newUser.plan = userData.plan;
    newUser.address = userData.address;
    newUser.password = userData.password;

  
    newUser.save()
      .then(function () {
        console.log("User data saved successfully:", newUser);
        res.status(200).json({ message: "User data saved successfully." });
      })
      .catch(function (err) {
        console.error("Error saving user data:", err);
        res.status(500).json({ error: "Failed to save user data." });
      });
  });


app.post("/maincontentupload", (req, res) => {
  const movieData = req.body;
  console.log("Received movie data:", movieData);

  MainContentModel.findOne({ title: movieData.title })
    .then((existingMovie) => {
      if (existingMovie) {
        existingMovie.subContent.push({
          name: movieData.subContent[0].name,
          releaseDate: movieData.subContent[0].releaseDate,
          imageUrl: movieData.subContent[0].imageUrl,
          description: movieData.subContent[0].description,
          categories: movieData.subContent[0].categories,
          totalLikes: movieData.subContent[0].totalLikes,
          ratings: movieData.subContent[0].ratings,
          type: movieData.subContent[0].type,
          videoUrl: movieData.subContent[0].videoUrl,
          seasons: movieData.subContent[0].seasons,
        });

        existingMovie
          .save()
          .then(() => {
            res
              .status(200)
              .json({ message: "Subcontent added to existing movie." });
          })
          .catch((err) => {
            res.status(500).json({ error: "Failed to update movie data." });
          });
      } else {
        const newMovie = new MainContentModel({
          title: movieData.title,
          subContent: [
            {
              name: movieData.subContent[0].name,
              releaseDate: movieData.subContent[0].releaseDate,
              imageUrl: movieData.subContent[0].imageUrl,
              description: movieData.subContent[0].description,
              categories: movieData.subContent[0].categories,
              totalLikes: movieData.subContent[0].totalLikes,
              ratings: movieData.subContent[0].ratings,
              type: movieData.subContent[0].type,
              videoUrl: movieData.subContent[0].videoUrl,
              seasons: movieData.subContent[0].seasons,
            },
          ],
        });

        newMovie
          .save()
          .then(() => {
            res
              .status(200)
              .json({ message: "New movie data saved successfully." });
          })
          .catch((err) => {
            res.status(500).json({ error: "Failed to save new movie data." });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to find movie data." });
    });
});

mongoose.connect(
  "mongodb+srv://22ceueg136:UzhIFg3PW36BWL4B@flixify.x0uihnz.mongodb.net/?retryWrites=true&w=majority&appName=Flixify"
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
