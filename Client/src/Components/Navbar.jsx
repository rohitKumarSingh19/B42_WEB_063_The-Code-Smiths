import React, { useState } from 'react';

export default function Navbar() {
  // State to manage user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('JohnDoe'); // Sample Data
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle login/logout
  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="VendoraX.png"
              alt="Logo"
              className="h-10"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
          >
            <span className="material-symbols-outlined">
              widgets
            </span>
          </button>

          {/* Search Bar and Links */}
          <div
            className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
          >
            {/* Search Bar */}
            <div className="flex items-center w-full md:w-64 lg:w-96 relative mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="material-symbols-outlined">
                  search
                </span>
              </button>
            </div>

            {/* Wishlist */}
            <button className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="material-symbols-outlined">
                favorite
              </span>
              <span className="hidden md:inline  ">Wishlist</span>
            </button>

            {/* Cart */}
            <button className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="material-symbols-outlined">
                shopping_cart
              </span>
              <span className="hidden md:inline">Cart</span>
            </button>

            {/* Become a Seller */}
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300 mt-4 md:mt-0">
              Become a Seller
            </button>

            {/* User Authentication */}
            {isLoggedIn ? (
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className=" ">{username}</span>
                <button
                  onClick={handleAuth}
                  className="bg-red-600   px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuth}
                className="bg-green-600   px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 mt-4 md:mt-0"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}