// Import the Product model
import { Product } from "../Models/Product.model.js";
// Import the fs module
import fs from "fs";
import path from "path";

// Controller to show all products
export const showProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("failed to load the products");
    console.error(error);
  }
};

// Controller to create a new product
export const createProduct = async (req, res) => {
  try {
    let imgLoc = req.file ? req.file.path : null;

    let productData = { ...req.body, image: imgLoc, owner: req.user._id };
    await Product.create(productData);
    res.status(201).send("product created");
  } catch (error) {
    res.status(500).send("product not created, create it again");
    console.error(error);
  }
};

// Controller to update an existing product
export const updateProduct = async (req, res) => {
  try {
    let productData = await Product.findOne({ _id: req.params.id });
    if (req.file && productData.image) {
      // Delete the old image file
      fs.unlinkSync(path.resolve(productData.image));
    }
    Object.assign(productData, req.body, {
      image: req.file ? req.file.path : productData.image,
    });
    await productData.save();
    res.status(200).send("product updated");
  } catch (error) {
    res.status(500).send("try again product not updated");
    console.error(error);
  }
};

// Controller to delete a product
export const deleteProduct = async (req, res) => {
  try {
    let productData = await Product.findOne({ _id: req.params.id });
    if (productData.image) {
      // Delete the image file
      fs.unlinkSync(path.resolve(productData.image));
    }
    await Product.findOneAndDelete({ _id: req.params.id });
    res.status(200).send("deletion successful");
  } catch (error) {
    res.status(500).send("try again item is not deleted");
    console.error(error);
  }
};
