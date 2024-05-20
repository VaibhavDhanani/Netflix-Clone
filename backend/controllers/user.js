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

exports.updateUserList = async (req, res) => {
  const { email, ...userData } = req.body; 

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { email: email }, 
      { ...userData },
      { new: true, upsert: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    console.log('User data updated successfully:', updatedUser);
    res.status(200).json({ message: 'User data updated successfully.', user: updatedUser });
  } catch (err) {
    console.error('Error updating user data:', err);
    res.status(500).json({ error: 'Failed to update user data.' });
  }
};


exports.getCurrentUser = async (req, res) => {
   
  try {
    const user = await UserModel.findOne({ email: req.query.email });
    
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to get users.' });
  }
};
