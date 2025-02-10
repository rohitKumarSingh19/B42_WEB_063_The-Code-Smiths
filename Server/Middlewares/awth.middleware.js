// Import jwt for token verification
import jwt from "jsonwebtoken";
// Import the User model
import { user } from "../Models/User.model.js";

// Middleware for authentication
export const awth = async (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).send("token is not available");

  try {
    const decode = jwt.verify(token, process.env.JWT_SECURITY_KEY);
    const userData = await user.findOne({ _id: decode.id });
    req.user = userData;
    next();
  } catch (error) {
    res.status(401).send("invalid token, login again");
    console.error(error);
  }
};
