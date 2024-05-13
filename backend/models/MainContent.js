const { mongoose } = require("mongoose");


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
const MainContentModel= mongoose.model("maindatas", MainContent);
module.exports = MainContentModel
