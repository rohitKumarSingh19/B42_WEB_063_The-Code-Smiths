import express from "express";
import {
  showProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/product.controller.js";
import { upload } from "../Middlewares/upload.middleware.js";
import { awth } from "../middlewares/awth.middleware.js";

const router = express.Router();

// Route to get all products
router.get("/", showProducts);

// Route to create a new product
// Uses 'awth' middleware for authentication and 'upload' middleware for handling image upload
router.post("/create", awth, upload.single("image"), createProduct);

// Route to update an existing product by ID
router.patch("/update/:id", upload.single("image"), updateProduct);

// Route to delete a product by ID
router.delete("/delete/:id", deleteProduct);

export default router;
