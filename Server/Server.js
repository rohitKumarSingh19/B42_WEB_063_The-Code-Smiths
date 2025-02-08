// Import dotenv to load environment variables from .env file
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

// Import express framework
import express from "express";
// Import corn to allow cross origin requests
import cors from "cors";
// Import database connection function
import connectDB from "./DB/config.DB.js";
// Import user routes
import userRouter from "./Routes/user.route.js";
// Import product routes
import productRouter from "./Routes/product.route.js";

// Initialize express app
const app = express();

// Middleware to allow cross origin requests
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Use user routes for /user endpoint
app.use("/user", userRouter);

// Use product routes for /product endpoint
app.use("/product", productRouter);

// Define a basic root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to VendoraX API!" });
});

// Use environment variable for port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Start the server and connect to the database
connectDB().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log("server not connected");
      console.error(err);
    } else {
      console.log(`Server is running on port: ${PORT}`);
    }
  });
});
