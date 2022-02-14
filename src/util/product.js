const mongoose = require("mongoose");
require("../db/db");

const Product = mongoose.model("products", {
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

module.exports = Product;
