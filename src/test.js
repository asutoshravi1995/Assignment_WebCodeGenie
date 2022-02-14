const express = require("express");
const mongoose = require("mongoose");
const Product = require("./util/product");
require("./db/db.js");
require("./db/setUp");

const app = express();

app.get("/", async (req, res) => {
  try {
    let products = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          qty: { $sum: 1 },
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          qty: "$qty",
          totalAmount: "$totalAmount",
        },
      },
    ]);
    res.send(products);
  } catch (error) {
    res.send(err.message);
  }
});

app.listen(3000);
