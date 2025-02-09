import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const user = null; // Replace with actual authentication logic

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Fetch search suggestions based on the query
    // setSearchSuggestions(fetchSuggestions(e.target.value));
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // Redirect to login after logout
  };


  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-10 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-primary flex items-center">
        <picture>
          <source media="(max-width: 640px)" srcSet="mobileLogo.png" />
          <img
            src="VendoraX.png"
            alt="Vendora-X"
            className="h-12 w-auto object-contain md:h-10" // Increased size for mobile
          />
        </picture>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Search Bar (Hidden on mobile when menu is open) */}
      {!isMenuOpen && (
        <div className="relative flex-grow mx-4 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 pl-10 border border-secondary-dark rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <FiSearch className="absolute left-3 top-2.5 text-darkgray" size={20} />
          {searchSuggestions.length > 0 && (
            <div className="absolute mt-2 w-full bg-white border border-secondary-dark rounded-lg shadow-lg">
              {searchSuggestions.map((suggestion, index) => (
                <div key={index} className="p-2 hover:bg-gray-100">
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Icons (Hidden on mobile when menu is closed) */}
      <div
        className={`md:flex items-center gap-4 md:gap-6 ${isMenuOpen
          ? "absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col md:flex-row md:relative md:top-0 md:shadow-none"
          : "hidden"
          }`}
      >
        <Link
          to="/wishlist"
          className="flex gap-2 items-center hover:text-primary text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <FiHeart />
          </motion.div>
          <p className="">Wishlist</p>
        </Link>

        <Link
          to="/cart"
          className="flex gap-2 items-center hover:text-primary text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <FiShoppingCart />
          </motion.div>
          <p className="">Cart</p>
        </Link>

        <Link
          to="/profile"
          className="flex gap-2 items-center hover:text-primary text-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          <p className="">Profile</p>
        </Link>
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="flex gap-2 items-center text-lg border px-4 py-2 rounded hover:bg-primary hover:text-white transition"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <FiUser />
              </motion.div>
              <p>Logout</p>
            </button>
          ) : (
            <Link
              to={"/login"}
              className="flex gap-2 items-center text-lg border px-4 py-2 rounded hover:bg-primary hover:text-white transition"
            >
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                <FiUser />
              </motion.div>
              <p>Login</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};