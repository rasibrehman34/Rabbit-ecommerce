const express = require("express");
const Product = require("../models/Products");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc create a new Product
// @access Private/Admin

router.post("/", protect, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collection,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimesions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collection,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimesions,
      weight,
      sku,
      user: req.user._id
    })

    const createProduct = await product.save();
    res.status(201).json(createProduct);

  } catch (error) {
    console.error(error)
    res.status(500).send("Server Error");


  }
})

module.exports = router;