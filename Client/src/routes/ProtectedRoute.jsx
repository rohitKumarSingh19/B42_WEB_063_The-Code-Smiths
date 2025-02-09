// import React from 'react';
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   // Placeholder authentication check (replace with your actual auth logic later)
//   const isAuthenticated = false; // Set to 'true' to simulate logged-in user for testing

//   if (!isAuthenticated) {
//     // Redirect to login page if not authenticated
//     return <Navigate to="/login" replace />;
//   }

//   // If authenticated, render the children components (the protected routes)
//   return children;
// };

// export default ProtectedRoute;



import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => { // Receive isLoggedIn prop
    if (!isLoggedIn) { // Use isLoggedIn prop for authentication check
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;