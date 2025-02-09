import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.cookies?.token || req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Handle "Bearer <token>" format properly
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    console.log("🔍 Decoded Token:", decoded); // Debugging

    if (!decoded || !decoded.role) {
      return res.status(401).json({ message: "Unauthorized: Invalid or missing role" });
    }

    req.user = decoded; // Attach decoded data to request
    next();
  } catch (error) {
    console.error("❌ Token Verification Error:", error.message);

    let errorMessage = "Unauthorized: Invalid token";
    if (error.name === "TokenExpiredError") {
      errorMessage = "Unauthorized: Token has expired";
    } else if (error.name === "JsonWebTokenError") {
      errorMessage = "Unauthorized: Invalid token signature";
    }

    return res.status(401).json({ message: errorMessage });
  }
};
