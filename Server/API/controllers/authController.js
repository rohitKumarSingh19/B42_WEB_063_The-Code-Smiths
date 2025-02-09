import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

// User Registration
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, accountType } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Create user
    const newUser = new User({ username, email, password, accountType });
    await newUser.save();
    console.log("Stored User in DB:", newUser); // Debugging log
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// User Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find User by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "Invalid credentials (User not found)" });
    }
    console.log("Stored Hashed Password in DB:", user.password);
    console.log("Entered Password:", password);

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match Result:", isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials (Incorrect password)" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.accountType },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure key in production
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.json({ message: "Login successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Logout User
export const logoutUser = (req, res) => {
  res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
  res.json({ message: "Logged out successfully" });
};
