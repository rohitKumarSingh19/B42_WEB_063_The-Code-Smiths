import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Define a basic root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to VendoraX API!' });
});

// Use environment variable for port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
