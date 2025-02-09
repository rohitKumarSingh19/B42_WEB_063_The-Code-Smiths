import roles from "../config/role.js"; 
const roleAuthorization = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: User not authenticated" });
    }

    console.log("🔍 User Object in Request:", req.user); 
    const userRole = req.user.role;
    
    console.log("🔍 Extracted User Role:", userRole);  
    console.log("✅ Allowed Roles for this route:", allowedRoles);

    if (!userRole ||!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
    }

    next();
  };
};

export default roleAuthorization;
