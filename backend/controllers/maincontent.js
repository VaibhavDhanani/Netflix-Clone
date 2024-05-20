const MainContentModel = require("../models/MainContent");

console.log(MainContentModel);

exports.getMainContent = async (req, res) => {
  try {
    const mainContent = await MainContentModel.find({});
    console.log(mainContent);
    res.json(mainContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get main content." });
  }
};

exports.getContent = async (req, res) => {
  try {
    const mainContent = await MainContentModel.findOne({
      title: req.query.title,
    });
    console.log(mainContent);
    const reqcontent = mainContent.subContent.find(
      (item) => item._id.toString() === req.query.id
    );
    res.json(reqcontent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get main content." });
  }
};

exports.getcategory = async (req, res) => {
  try {
    const { title } = req.params;
    const mainContent = await MainContentModel.findOne({ title });
    res.json(mainContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get main content." });
  }
};
exports.uploadMainContent = async (req, res) => {
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
};

exports.updateContent = async (req, res) => {
  // const { email, ...userData } = req.body;
  // try {
  //   const updatedSubContent = await MainContentModel.findOneAndUpdate(
  //     { email: email },
  //     { ...userData },
  //     { new: true, upsert: true }
  //   );
  //   if (!updatedUser) {
  //     return res.status(404).json({ error: 'User not found.' });
  //   }
  //   console.log('User data updated successfully:', updatedUser);
  //   res.status(200).json({ message: 'User data updated successfully.', user: updatedUser });
  // } catch (err) {
  //   console.error('Error updating user data:', err);
  //   res.status(500).json({ error: 'Failed to update user data.' });
  // }
};
