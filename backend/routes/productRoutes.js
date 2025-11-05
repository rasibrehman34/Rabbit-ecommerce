const express = require("express");
const Product = require("../models/Products");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc create a new Product
// @access Private/Admin

router.post("/", protect, admin, async (req, res) => {
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
      collections,
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
      collections,
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


// @route PUT /api/products/:id
// @desc  Update an existing products id
// @access Private/Public

router.put("/:id", protect, admin, async (req, res )=>{
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
      collections,
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

    //find productbby ID in database
    const product = await Product.findById(req.params.id)

    if(product){
      // update product fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured = 
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished = 
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimesions = dimesions || product.dimesions;
      product.sku = sku || product.sku;
    
    
    // save the updated product in Database
    const updatedProduct = await product.save();
    res.json(updatedProduct)
    } else{
      res.status(404).json({message: "Product not found"})
    }

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error ");
    
  }
})


// @routes DELETE /api/products/:id
// @desc delete a product by id
// @access private?/admin

router.delete("/:id", protect, admin, async (req, res)=>{
  try {

    //find the product by id;
    const product = await Product.findById(req.params.id);

    if(product){
      // remove the product from db

      await product.deleteOne();
      res.json({message : "Product remove"})

    }else{
      res.status(404).json({message: "Product not found"})
    }
    
  } catch (error) {
    console.error(error)
    res.status(500).send({message:"server error"})
  }

})
module.exports = router;