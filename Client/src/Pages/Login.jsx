import { signInWithGoogle } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/profile");
      }
    });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-200 px-4">
      {/* Card Container */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center flex flex-col items-center">

        {/* Logo Centered */}
        <div className="mb-6 w-full flex justify-center">
          <picture>
            <source media="(max-width: 640px)" srcSet="mobileLogo.png" />
            <img
              src="VendoraX.png"
              alt="Vendora-X"
              className="h-16 w-auto object-contain" // Adjusted size for a better look
            />
          </picture>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-gray-600 mb-6">Sign in to continue shopping</p>

        {/* Sign-in Button with Fixed Spacing */}
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition w-full shadow-md mb-4"
        >

          Sign in with Google
        </button>

        {/* Separator */}
        <div className="flex items-center my-4 w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Guest Checkout */}
        <button className="text-blue-600 hover:underline text-sm">
          Continue as Guest
        </button>

        {/* Footer */}
        <p className="mt-6 text-gray-500 text-xs">
          By signing in, you agree to our{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Terms of Service
          </span>{" "}
          &{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
