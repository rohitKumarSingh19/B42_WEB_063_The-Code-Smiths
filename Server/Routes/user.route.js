// Import express framework
import express from "express";
// Import user controllers
import {
  userRegister,
  userLogin,
  userLogout,
} from "../Controllers/user.controller.js";
// Import authentication middleware
import { awth } from "../middlewares/awth.middleware.js";

// Create a new router instance
const router = express.Router();

// Route for user registration
router.post("/register", userRegister);
// Route for user login
router.post("/login", userLogin);
// Route for user logout, uses 'awth' middleware for authentication
router.post("/logout", awth, userLogout);

// Export the router
export default router;
