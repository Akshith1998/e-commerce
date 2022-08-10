const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    description: { type: String },
    brand: { type: String },
    category: { type: String },
    rating: { type: Number },
    numReviews: { type: Number },
    price: { type: Number },
    countInStock: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
