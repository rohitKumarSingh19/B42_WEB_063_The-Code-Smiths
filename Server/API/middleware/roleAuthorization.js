// API/middleware/roleAuthorization.js
import roles from '../config/role.js';  // Import the roles from the roles.js file

const roleAuthorization = (allowedRoles) => {
  return (req, res, next) => {
    // Check if the user is authenticated and if req.user is available (from authentication middleware)
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: User not authenticated" });
    }

    // Get the user's role from req.user (attached by authentication middleware)
    const userRole = req.user.role;

    // Check if the user's role is in the allowed roles
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }

    // If user has the required role, allow access to the route
    next();
  };
};

export default roleAuthorization;
