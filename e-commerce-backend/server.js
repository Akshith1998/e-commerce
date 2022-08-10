const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const ProductController = require("./User/Routes/ProductRoute");

mongoose
  .connect(
    "mongodb+srv://Akshith:akshith123@cluster0.klllr.mongodb.net/Shopping?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/product", ProductController);

app.listen(3001, (err) => {
  if (!err) {
    console.log(`server is running at port 3001`);
  } else {
    console.log(err);
  }
});
