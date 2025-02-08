// Import express framework
import express from "express";
// Import product controllers
import {
  showProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/product.controller.js";
// Import upload middleware for handling file uploads
import { upload } from "../Middlewares/upload.middleware.js";
// Import authentication middleware
import { awth } from "../middlewares/awth.middleware.js";

// Create a new router instance
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

// Export the router
export default router;
