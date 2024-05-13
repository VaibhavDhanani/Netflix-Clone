const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const userController = require('./controllers/user');
const mainContentController = require('./controllers/maincontent');

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://22ceueg136:UzhIFg3PW36BWL4B@flixify.x0uihnz.mongodb.net/?retryWrites=true&w=majority&appName=Flixify"
);

app.get('/api/getdata', userController.getAllUsers);
app.post('/api/user', userController.createUser);

app.get('/api/getmaincontent',mainContentController.getMainContent)
app.post('/api/maincontentupload', mainContentController.uploadMainContent);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
