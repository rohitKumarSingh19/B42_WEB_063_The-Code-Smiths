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

  {
    "title": "Wireless Headphones",
    "image": "headphones.jpg",
    "category": "Electronics",
    "description": "Noise-canceling wireless headphones.",
    "price": 120,
    "totalBuy": 50,
    "discountedPrice": 99,
    "rating": 4.5
  },
  {
    "title": "Bluetooth Speaker",
    "image": "speaker.jpg",
    "category": "Electronics",
    "description": "Portable Bluetooth speaker with deep bass.",
    "price": 80,
    "totalBuy": 120,
    "discountedPrice": 65,
    "rating": 4.2
  },
  {
    "title": "Smartwatch",
    "image": "smartwatch.jpg",
    "category": "Electronics",
    "description": "Fitness tracking smartwatch with heart rate monitor.",
    "price": 200,
    "totalBuy": 150,
    "discountedPrice": 180,
    "rating": 4.7
  },
  {
    "title": "Wireless Mouse",
    "image": "mouse.jpg",
    "category": "Electronics",
    "description": "Ergonomic wireless mouse with adjustable DPI.",
    "price": 25,
    "totalBuy": 300,
    "discountedPrice": 19,
    "rating": 4.4
  },
  {
    "title": "Laptop Stand",
    "image": "laptop-stand.jpg",
    "category": "Accessories",
    "description": "Adjustable laptop stand for ergonomic posture.",
    "price": 40,
    "totalBuy": 90,
    "discountedPrice": 35,
    "rating": 4.1
  },
  {
    "title": "Smartphone",
    "image": "smartphone.jpg",
    "category": "Electronics",
    "description": "Latest model smartphone with high-resolution camera.",
    "price": 800,
    "totalBuy": 200,
    "discountedPrice": 750,
    "rating": 4.6
  },
  {
    "title": "Gaming Laptop",
    "image": "gaming-laptop.jpg",
    "category": "Electronics",
    "description": "High-performance laptop for gaming with GTX graphics.",
    "price": 1500,
    "totalBuy": 70,
    "discountedPrice": 1400,
    "rating": 4.8
  },
  {
    "title": "Wireless Keyboard",
    "image": "keyboard.jpg",
    "category": "Electronics",
    "description": "Wireless keyboard with long battery life.",
    "price": 50,
    "totalBuy": 180,
    "discountedPrice": 40,
    "rating": 4.3
  },
  {
    "title": "4K TV",
    "image": "tv.jpg",
    "category": "Electronics",
    "description": "55-inch 4K Ultra HD television.",
    "price": 600,
    "totalBuy": 130,
    "discountedPrice": 550,
    "rating": 4.7
  },
  {
    "title": "Bluetooth Earbuds",
    "image": "earbuds.jpg",
    "category": "Electronics",
    "description": "Compact Bluetooth earbuds with superior sound quality.",
    "price": 70,
    "totalBuy": 250,
    "discountedPrice": 60,
    "rating": 4.4
  },
  {
    "title": "Portable Charger",
    "image": "charger.jpg",
    "category": "Accessories",
    "description": "Compact portable charger for all devices.",
    "price": 30,
    "totalBuy": 400,
    "discountedPrice": 25,
    "rating": 4.0
  },
  {
    "title": "Electric Toothbrush",
    "image": "toothbrush.jpg",
    "category": "Health & Beauty",
    "description": "Rechargeable electric toothbrush with multiple modes.",
    "price": 60,
    "totalBuy": 100,
    "discountedPrice": 50,
    "rating": 4.5
  },
  {
    "title": "Fitness Tracker",
    "image": "fitness-tracker.jpg",
    "category": "Health & Beauty",
    "description": "Wearable fitness tracker with step and heart rate monitoring.",
    "price": 50,
    "totalBuy": 200,
    "discountedPrice": 45,
    "rating": 4.2
  },
  {
    "title": "Coffee Maker",
    "image": "coffee-maker.jpg",
    "category": "Home Appliances",
    "description": "Automatic coffee maker with brew strength control.",
    "price": 90,
    "totalBuy": 150,
    "discountedPrice": 80,
    "rating": 4.3
  },
  {
    "title": "Microwave Oven",
    "image": "microwave.jpg",
    "category": "Home Appliances",
    "description": "Compact microwave oven with quick cooking modes.",
    "price": 120,
    "totalBuy": 80,
    "discountedPrice": 100,
    "rating": 4.5
  },
  {
    "title": "Cordless Vacuum Cleaner",
    "image": "vacuum.jpg",
    "category": "Home Appliances",
    "description": "Lightweight cordless vacuum cleaner with strong suction.",
    "price": 150,
    "totalBuy": 130,
    "discountedPrice": 130,
    "rating": 4.6
  },
  {
    "title": "Electric Kettle",
    "image": "kettle.jpg",
    "category": "Home Appliances",
    "description": "Fast-boiling electric kettle with temperature control.",
    "price": 40,
    "totalBuy": 300,
    "discountedPrice": 35,
    "rating": 4.2
  },
  {
    "title": "Air Purifier",
    "image": "air-purifier.jpg",
    "category": "Home Appliances",
    "description": "Air purifier with HEPA filter for clean indoor air.",
    "price": 200,
    "totalBuy": 60,
    "discountedPrice": 180,
    "rating": 4.7
  },
  {
    "title": "Pressure Cooker",
    "image": "pressure-cooker.jpg",
    "category": "Home Appliances",
    "description": "Stainless steel pressure cooker for quick cooking.",
    "price": 60,
    "totalBuy": 90,
    "discountedPrice": 50,
    "rating": 4.4
  },
  {
    "title": "Bicycle",
    "image": "bicycle.jpg",
    "category": "Sports & Outdoors",
    "description": "Mountain bicycle with suspension and 18-speed gears.",
    "price": 300,
    "totalBuy": 40,
    "discountedPrice": 270,
    "rating": 4.6
  },
  {
    "title": "Camping Tent",
    "image": "tent.jpg",
    "category": "Sports & Outdoors",
    "description": "4-person camping tent with waterproof coating.",
    "price": 100,
    "totalBuy": 80,
    "discountedPrice": 85,
    "rating": 4.3
  },
  {
    "title": "Yoga Mat",
    "image": "yoga-mat.jpg",
    "category": "Sports & Outdoors",
    "description": "Non-slip yoga mat for comfort and support.",
    "price": 30,
    "totalBuy": 200,
    "discountedPrice": 25,
    "rating": 4.0
  },
  {
    "title": "Dumbbell Set",
    "image": "dumbbells.jpg",
    "category": "Sports & Outdoors",
    "description": "Adjustable dumbbell set for home gym workouts.",
    "price": 120,
    "totalBuy": 50,
    "discountedPrice": 100,
    "rating": 4.5
  }
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
