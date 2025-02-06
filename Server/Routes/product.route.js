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

router.get("/", showProducts);
router.post("/create", upload.single("image"), createProduct);
router.patch("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
