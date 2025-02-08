import jwt from "jsonwebtoken";
import { user } from "../Models/User.model.js";

export const awth = async (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (!token) return res.send("token is not available");

  try {
    const decode = jwt.verify(token, process.env.JWT_SECURITY_KEY);
    const userData = await user.findOne({ _id: decode.id });
    req.user = userData;
    next();
  } catch (error) {
    res.send("invalid token, login again");
    console.error(error);
  }
};
