import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../Models/Product.js';
import connectDB from '../config/db.js';
dotenv.config();
connectDB();
const products = [
  {
    title: 'Wireless Headphones',
    image: 'headphones.jpg',
    category: 'Electronics',
    description: 'Noise-canceling wireless headphones.',
    price: 120,
    totalBuy: 50,
    discountedPrice: 99,
    rating: 4.5,
  },
  {
    title: 'Smartphone',
    image: 'smartphone.jpg',
    category: 'Electronics',
    description: 'Latest model with high-end features.',
    price: 699,
    totalBuy: 30,
    discountedPrice: 649,
    rating: 4.7,
  },
  {
    title: 'Running Shoes',
    image: 'shoes.jpg',
    category: 'Footwear',
    description: 'Comfortable running shoes for all terrains.',
    price: 90,
    totalBuy: 100,
    discountedPrice: 75,
    rating: 4.2,
  },
  // Add 22 more products with different categories, prices, and ratings
];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Dummy data inserted successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting dummy data:', error);
    process.exit(1);
  }
};

seedProducts();

// Searching, Filtering, and Sorting Products
export const getProducts = async (req, res) => {
  try {
    let { search, category, minPrice, maxPrice, sortBy, order } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    let sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = order === 'desc' ? -1 : 1;
    }
    const products = await Product.find(filter).sort(sortOptions);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
