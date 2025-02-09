// API/routes/protectedRoute.js
import express from "express";
import { verifyToken } from '../middleware/authMiddleware.js'; 
import roleAuthorization from "../middleware/roleAuthorization.js";
//import authenticate from '../middleware/authMiddleware.js';
import roles from "../config/role.js";  // Import the roles from the config

const router = express.Router();

// Route for Admin only - only users with the 'admin' role can access this route
router.get(
  "/admin-only",
  verifyToken,  // Authentication middleware
  roleAuthorization([roles.ADMIN,roles.USER]),  // Authorization middleware for admin role
  (req, res) => {
    res.json({ message: "Welcome, Admin! You have access to this route." });
  }
);

// Route for Admin or User - users with 'admin' or 'user' roles can access this route
router.get(
  "/user-or-admin",
  verifyToken,  // Authentication middleware
  roleAuthorization([roles.ADMIN, roles.USER]),  // Authorization middleware for admin or user roles
  (req, res) => {
    res.json({ message: "Welcome! You have access to this route." });
  }
);
// Vendor-only route
router.get(
  "/vendor-only",
  verifyToken,
  roleAuthorization([roles.VENDOR]),
  (req, res) => {
      res.json({ message: "Welcome, Vendor! You can manage your products." });
  }
);

export default router;
