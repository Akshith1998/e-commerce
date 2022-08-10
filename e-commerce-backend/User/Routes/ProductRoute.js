const express = require("express");
const router = express.Router();
const products = require("../../Data/products");
const ProductModal = require("../Modal/ProductModal");

router.post("/", (req, res) => {
  ProductModal.create(req.body)
    .then((Data) => {
      res.status(200).send(Data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
