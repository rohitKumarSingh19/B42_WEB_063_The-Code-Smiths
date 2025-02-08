import { Product } from "../Models/Product.model.js";

export const showProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.send(products);
  } catch (error) {
    res.send("failed to load the products");
    console.error(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    let imgLoc = req.file ? req.file.path : null;

    let productData = { ...req.body, image: imgLoc };
    await Product.create(productData);
    res.send("product created");
  } catch (error) {
    res.send("product not created, create it again");
    console.error(error);
  }
};

export const updateProduct = async (req, res) => {
  const productData = await Product.findOne({ _id: req.params.id });

  console.log(productData);
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    res.send("deletion successful");
  } catch (error) {
    res.send("try again item is not deleted");
    console.error(error);
  }
};
