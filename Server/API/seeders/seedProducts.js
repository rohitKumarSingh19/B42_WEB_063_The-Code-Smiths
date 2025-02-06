import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from '../Models/Product.js';
import connectDB from '../config/db.js';

dotenv.config();

const productData = [
  {
    title: "Wireless Headphones",
    image: "https://example.com/headphones.jpg",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 120,
    totalBuy: 50,
    discountedPrice: 99,
    rating: 4.5,
    reviews: [
      { userId: new mongoose.Types.ObjectId(), rating: 5, comment: "Great sound quality!" }
    ]
  },
  {
    title: "Smart Watch",
    image: "https://example.com/smartwatch.jpg",
    category: "Electronics",
    description: "Waterproof smartwatch with fitness tracking.",
    price: 150,
    totalBuy: 30,
    discountedPrice: 129,
    rating: 4.2,
    reviews: [
      { userId: new mongoose.Types.ObjectId(), rating: 4, comment: "Battery life is amazing!" }
    ]
  },
  {
    title: "Gaming Laptop",
    image: "https://example.com/laptop.jpg",
    category: "Computers",
    description: "Powerful gaming laptop with RTX 3070.",
    price: 2000,
    totalBuy: 10,
    discountedPrice: 1799,
    rating: 4.8,
    reviews: [
      { userId: new mongoose.Types.ObjectId(), rating: 5, comment: "Best laptop for gaming!" }
    ]
  },
  {
    title: "Bluetooth Speaker",
    image: "https://example.com/speaker.jpg",
    category: "Electronics",
    description: "Portable Bluetooth speaker with deep bass.",
    price: 75,
    totalBuy: 100,
    discountedPrice: 69,
    rating: 4.6,
    reviews: [
      { userId: new mongoose.Types.ObjectId(), rating: 5, comment: "Best sound in this price range!" }
    ]
  },
  {
    title: "Smartphone",
    image: "https://example.com/phone.jpg",
    category: "Mobiles",
    description: "Latest smartphone with AMOLED display and fast charging.",
    price: 699,
    totalBuy: 500,
    discountedPrice: 649,
    rating: 4.7,
    reviews: [
      { userId: new mongoose.Types.ObjectId(), rating: 5, comment: "Amazing camera quality!" }
    ]
  }
];

// Add more products to make it 25
for (let i = 5; i < 25; i++) {
  productData.push({
    title: `Product ${i + 1}`,
    image: "https://example.com/default.jpg",
    category: "General",
    description: `This is a sample product ${i + 1}.`,
    price: Math.floor(Math.random() * 500) + 50,
    totalBuy: Math.floor(Math.random() * 200),
    discountedPrice: Math.floor(Math.random() * 100) + 30,
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: [
      { userId: new mongoose.Types.ObjectId(), rating: 4, comment: "Good product!" }
    ]
  });
}

const seedProducts = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(productData);
    console.log("✅ 25 Products inserted successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting data:", error);
    mongoose.disconnect();
  }
};

seedProducts();
