const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies

app.get('/api', (req, res) =>{
    res.json({"users":["jhonny","joh","janardan"]})
});

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    city: String,
    plan: String,
    address: String,
    password: String
});

const ContentSchema = new mongoose.Schema({
    title:String ,
    releaseDate: String,
    imageUrl:String, 
    videoUrl:String, 
    description:String,
    categories:[String]
});
const ContentModel = mongoose.model("content", ContentSchema);
const UserModel = mongoose.model("users", UserSchema);

app.get('/getdata', (req, res) =>{
    UserModel.find({}).then(function(user){
        res.json(user);
    }).catch(function(err){
        console.log(err);
    });
});

app.post("/user", (req, res) => {
    const userData = req.body;
    console.log("Received user data:", userData);
    const newUser = new UserModel();
    newUser.name = userData.displayName;
    newUser.email = userData.email;
    newUser.phone = "45454545";
    newUser.city = "surat";
    newUser.plan = "pro";
    newUser.address = "surat-gujrat";
    newUser.password =  userData.password;
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

app.post('/movies', (req, res) => {
    const movieData = req.body;
    console.log('Received movie data:', movieData);
    const newMovie = new ContentModel({
        title: movieData.title,
        releaseDate: movieData.releaseDate,
        imageUrl: movieData.imageUrl,
        videoUrl: movieData.videoUrl,
        description: movieData.description,
        categories: movieData.categories
    });
    
    newMovie.save()
    .then(() => {
        console.log('Movie data saved successfully:', newMovie);
        res.status(200).json({ message: 'Movie data saved successfully.' });
    })
    .catch((err) => {
        console.error('Error saving movie data:', err);
        res.status(500).json({ error: 'Failed to save movie data.' });
    });
});

mongoose.connect('mongodb://localhost:27017/netflix-clone')
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
