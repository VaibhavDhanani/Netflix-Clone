const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    companyEmail: String,
    companyName: String,
    companyLocation: String,
    establishDate: Date,
    contactNumber: String,
    userId: String,
    
})

const SellerModel = mongoose.model('sellers', SellerSchema);
module.exports = SellerModel;