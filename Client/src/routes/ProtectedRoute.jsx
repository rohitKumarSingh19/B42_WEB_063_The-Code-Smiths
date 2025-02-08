import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Firebase auth
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; // Show a loading state while checking auth
  if (!user) return <Navigate to="/login" replace />; // Redirect if not logged in

  return children;
};

export default ProtectedRoute;