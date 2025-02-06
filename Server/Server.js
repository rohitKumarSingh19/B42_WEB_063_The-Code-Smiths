import express from 'express';
import dotenv from 'dotenv';
import connectDB from './API/config/db.js';
// Load environment variables from .env file
import cors from 'cors';
import productRoutes from './API/routes/productRoutes.js';
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
//Connect to MongoDB
// Define a basic root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to VendoraX API!' });
});
app.use('/api/products',productRoutes);
// Use environment variable for port or fallback to 3000
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
