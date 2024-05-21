const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const stripe = require("stripe")(
  "sk_test_51PH97tSFX0SomHQ8b8W57K4CszXF8CHevIWbzG6eilOzJejZV59ab2aN4ghMTzp2mCOLWEgpWcl2xM6B7EXI2tKR00ImdIIq23"
);
const userController = require("./controllers/user");
const mainContentController = require("./controllers/maincontent");
const sellerController = require("./controllers/seller");

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://22ceueg136:UzhIFg3PW36BWL4B@flixify.x0uihnz.mongodb.net/?retryWrites=true&w=majority&appName=Flixify"
);

app.get("/api/getusers", userController.getAllUsers);
app.get("/api/user", userController.getCurrentUser);
app.post("/api/user", userController.createUser);
app.post("/api/updateuserlist", userController.updateUserList);

app.post("/api/updateuserrole", userController.updateRole)

app.get("/api/getcontent", mainContentController.getContent);
app.get("/api/getuserlist", mainContentController.getUserList);
app.get("/api/getmaincontent", mainContentController.getMainContent);
app.post("/api/maincontentupload", mainContentController.uploadMainContent);
// app.post("/api/updatecontent", mainContentController.updateContent);
app.get("/api/maincontent/:title", mainContentController.getcategory);

app.get("/api/checkseller",sellerController.checkSeller);

app.post("/api/createseller",sellerController.createSeller)



app.post("/api/payment", async (req, res) => {
  const user = req.body;
  console.log("i got the data");
  console.log(user);
  console.log(user.userdata.plan);
  let value = 199;
  if (user.userdata.plan == "special") {
    value = 299;
    console.log("special plan selected");
  } else if (user.userdata.plan == "pro") {
    value = 399;
    console.log("pro plan selected");
  } else if (user.userdata.plan == "premium") {
    value = 599;
    console.log("premium plan selected");
  }
  const Line_items = [
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: `${user.userdata.plan} plan `,
        },
        unit_amount: value * 100,
      },
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    line_items: Line_items,
    mode: "payment",
    success_url: `http://localhost:3000/signup?success=true`,
    cancel_url: "http://localhost:3000/cancel",
  });
  console.log(session);
  res.json({ id: session.id, url: session.url });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
