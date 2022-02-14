const mongoose = require("mongoose");
const Product = require("../util/product");
require("./db");
const products = [
  {
    title: "Vivo X50",
    category: "mobile",
    amount: 35000,
  },
  {
    title: "Samsung M32",
    category: "mobile",
    amount: 18000,
  },
  {
    title: "Lenovo 15E253",
    category: "laptop",
    amount: 85000,
  },
  {
    title: "Dell XPS 15R",
    category: "laptop",
    amount: 115000,
  },
];

let setUp = async () => {
  try {
    await Product.remove();
    products.forEach(async (product) => {
      let temp = await Product.create(product);
      await temp.save();
    });
  } catch (error) {
    throw error;
  }
};

setUp();
