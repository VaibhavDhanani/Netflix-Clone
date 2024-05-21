const mongoose = require("mongoose");
const MainContentModel = require("./MainContent"); 

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  phone: Number,
  city: String,
  plan: String,
  date: Date,
  address: String,
  password: String,
  mylist: {
    type: [{
      type: String,
      validate: {
        validator: async function(value) {
          const mainContent = await MainContentModel.findOne({
            "subContent.name": value
          });
          return !!mainContent;
        },
        message: props => `${props.value} is not a valid subContent name`
      }
    }],
    default: []
  }
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
