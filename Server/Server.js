import express from 'express';
import dotenv from 'dotenv';
import connectDB from './API/config/db.js';
import cookieParser from 'cookie-parser';
// import authRoutes from './API/routes/authRoutes.js';
import authRoutes from './API/routes/authRoutes.js';
import productRoutes from './API/routes/productRoutes.js'
// Load environment variables from .env file
import cors from 'cors';
dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
  }));
//Connect to MongoDB
// Define a basic root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to VendoraX API!' });
});
app.use('/api/auth',authRoutes)
app.use('/api/products',productRoutes);
// Use environment variable for port or fallback to 3000
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
