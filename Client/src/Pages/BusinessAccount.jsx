import React, { useState } from "react";
import rider from "../assets/rider.png";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function BusinessAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const stats = [
    { value: "11 Lakh+", description: "Trust VendoraX to sell online", color: "text-primary" },
    { value: "14 Crore+", description: "Customers buying across India", color: "text-yellow-500" },
    { value: "19000+", description: "Pincode Supported for delivery", color: "text-secondary" },
    { value: "700+", description: "Categories to sell online", color: "text-red-600" },
  ];

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setIsValidEmail(true);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setEmail("");
      }, 3000); // Close modal after 3 seconds
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 relative">
      {/* Confetti Animation */}
      {isSubmitted && <Confetti />}

      {/* Top Section */}
      <div className="p-8 flex flex-col md:flex-row items-center gap-6 w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 leading-tight">
            Sell Online to <span className="text-secondary">1Cr+</span> Customers at{" "}
            <span className="text-primary">0% Commission</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Become a <span className="font-semibold text-primary">VendoraX</span> seller and grow your business across
            India.
          </p>
          <p className="text-red-500 font-medium mt-2">No need of GSTIN</p>

          {/* Call to Action Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-5 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-80 transition"
          >
            Start Selling Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img src={rider} alt="rider" className="w-full max-w-xs md:max-w-md" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h2>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {!isSubmitted ? (
                <>
                  <h2 className="text-xl font-bold mb-4">Start Selling Now</h2>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-2 border ${isValidEmail ? "border-gray-300" : "border-red-500"
                      } rounded-lg mb-4`}
                  />
                  {!isValidEmail && (
                    <p className="text-red-500 text-sm mb-4">Please enter a valid email address.</p>
                  )}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
                  >
                    Send
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-4">Success!</h2>
                  <p className="text-gray-600">Your email has been submitted successfully.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}