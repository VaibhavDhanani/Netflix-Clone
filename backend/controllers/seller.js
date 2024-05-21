const SellerModel = require("../models/Seller");
const UserModel = require("../models/User");

exports.createSeller = async (req, res) => {
  const {
    userId,
    companyEmail,
    companyName,
    companyLocation,
    establishDate,
    contactNumber,
  } = req.body;

  try {
    const newSeller = new SellerModel({
      userId,
      companyEmail,
      companyName,
      companyLocation,
      establishDate,
      contactNumber,
    });

    await newSeller.save();

    res
      .status(201)
      .json({
        message: "Seller document created successfully",
        seller: newSeller,
      });
  } catch (error) {
    console.error("Error creating seller document:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.checkSeller = async (req, res) => {
    const { userId } = req.query;
    console.log(userId);
    try {
      const seller = await SellerModel.findOne({ userId : userId });
      if (!seller) {
        return res.status(404).json({ message: 'No seller found for the given user ID' });
      }
      res.json(seller);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
