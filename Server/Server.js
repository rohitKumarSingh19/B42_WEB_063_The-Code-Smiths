import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

import express from "express";
import connectDB from "./DB/config.DB.js";
import userRouter from "./Routes/user.route.js";
import productRouter from "./Routes/product.route.js";

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.use("/product", productRouter);

// Define a basic root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to VendoraX API!" });
});

// Use environment variable for port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Start the server
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
