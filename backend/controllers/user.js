const  UserModel  = require("../models/User");


exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to get users.' });
  }
};

exports.createUser = async (req, res) => {
  const userData = req.body;
  const newUser = new UserModel(userData);
  newUser.date = new Date();
  try {
    await newUser.save();
    console.log('User data saved successfully:', newUser);
    res.status(200).json({ message: 'User data saved successfully.' });
  } catch (err) {
    console.error('Error saving user data:', err);
    res.status(500).json({ error: 'Failed to save user data.' });
  }
};

exports.getCurrentUser = async (req, res) => {
  console.log(req.query.email);  
  try {
    const user = await UserModel.findOne({ email: req.query.email });
    console.log(user)
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to get users.' });
  }
};
