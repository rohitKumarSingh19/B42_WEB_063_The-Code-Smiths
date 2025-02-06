import express from 'express';
import { getProducts,getProductById,updateProduct,deleteProduct ,createProduct} from '../controllers/productController.js';
const router = express.Router();
// Route for searching, filtering, and sorting products
router.get('/products', getProducts);
//Get a single product by ID
router.get('/products/:id',getProductById);
//Create a new product
router.post('/products',createProduct);
// Update a product
router.put('/products/:id',updateProduct);
// Delete a product
router.delete('/products',deleteProduct);
export default router;

