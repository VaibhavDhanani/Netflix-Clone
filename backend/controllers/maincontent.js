const MainContentModel = require("../models/MainContent");

exports.getContentByPlan = async (req, res) => {
  const { plan } = req.query;

  if (!plan) {
    return res.status(400).json({ error: "Plan query parameter is required." });
  }

  try {
    const mainContent = await MainContentModel.find({});

    let plansToInclude;
    switch (plan) {
      case "premium":
        plansToInclude = ["basic", "special", "pro", "premium"];
        break;
      case "pro":
        plansToInclude = ["basic", "special", "pro"];
        break;
      case "special":
        plansToInclude = ["basic", "special"];
        break;
      case "basic":
        plansToInclude = ["basic"];
        break;
      default:
        return res.status(400).json({ error: "Invalid plan specified." });
    }

    const filteredContent = mainContent.map((content) => {
      return {
        ...content._doc,
        subContent: content.subContent.filter((item) =>
          plansToInclude.includes(item.plan)
        ),
      };
    });

    const result = filteredContent.filter(
      (content) => content.subContent.length > 0
    );

    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get main content." });
  }
};

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
    const { plan } = req.query;

    if (!plan) {
      return res
        .status(400)
        .json({ error: "Plan query parameter is required." });
    }

    const mainContent = await MainContentModel.findOne({ title });

    if (!mainContent) {
      return res.status(404).json({ error: "Main content not found." });
    }

    let plansToInclude;
    switch (plan) {
      case "premium":
        plansToInclude = ["basic", "special", "pro", "premium"];
        break;
      case "pro":
        plansToInclude = ["basic", "special", "pro"];
        break;
      case "special":
        plansToInclude = ["basic", "special"];
        break;
      case "basic":
        plansToInclude = ["basic"];
        break;
      default:
        return res.status(400).json({ error: "Invalid plan specified." });
    }

    const filteredSubContent = mainContent.subContent.filter((item) =>
      plansToInclude.includes(item.plan)
    );

    const result = {
      ...mainContent._doc,
      subContent: filteredSubContent,
    };

    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get main content." });
  }
};

exports.getUserList = async (req, res) => {
  try {
    const list = req.query.list.split(",");
    const result = [];
    const docs = await MainContentModel.find({
      "subContent.name": { $in: list },
    });
    docs.forEach((doc) => {
      doc.subContent.forEach((sub) => {
        if (list.includes(sub.name)) {
          result.push(sub);
        }
      });
    });
    res.json(result);
  } catch (err) {
    console.error(err);
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
          plan: movieData.subContent[0].plan,
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
              plan: movieData.subContent[0].plan,
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




exports.getallmovies = async (req, res) => {
  try {
    const mainContent = await MainContentModel.find({});
    let allSubContent = [];
    mainContent.forEach(content => {
      allSubContent = allSubContent.concat(content.subContent.filter(sub => sub.seasons === null));
    });
    res.json(allSubContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get subcontent with season not null." });
  }
};


exports.getNewPopularSubContent = async (req, res) => {
  try {
    const mainContent = await MainContentModel.find({});
    let allSubContent = [];
    const currentDate = new Date();
    const oneYearAgo = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());

    mainContent.forEach(content => {
      content.subContent.forEach(sub => {
        if ((new Date(sub.releaseDate) >= oneYearAgo) &&  (sub.ratings > 5.0)) {
          allSubContent.push(sub);
        }
      });
    });

    res.json(allSubContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get new popular subcontent." });
  }
};

