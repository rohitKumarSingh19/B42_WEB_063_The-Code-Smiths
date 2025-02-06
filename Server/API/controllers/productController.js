import {Product} from '../Models/Product.js';
// Create Product
export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Get all products
export const getAllProducts=async(req,res)=>{
    try{
        const products=await Product.find();
        res.json(products);
    }catch(error){
        res.status(500).json({message:"Server error"})
    }
}
// Get All Products (Filtering, Sorting)
export const getProducts = async (req, res) => {
    try {
        let query = {};
        if (req.query.search) {
            query.name = { $regex: req.query.search, $options: 'i' };
        }
        if (req.query.category) {
            query.category = req.query.category;
        }

        let sortQuery = {};
        if (req.query.sortBy) {
            sortQuery[req.query.sortBy] = req.query.order === 'desc' ? -1 : 1;
        }

        const products = await Product.find(query).sort(sortQuery);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single Product
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Product
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product removed' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
