import express from 'express';
import { getProducts } from '../controllers/productController.js';
const router = express.Router();
// Route for searching, filtering, and sorting products
router.get('/products', getProducts);
export default router;

