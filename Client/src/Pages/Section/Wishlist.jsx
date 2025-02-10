import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Trash2 } from "lucide-react";
import { productData } from "../../Data/Data";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(productData);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 p-6">
      {/* Wishlist Header */}
      <div className="flex justify-between gap-3 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">WishList <span className="text-lg font-medium text-primary">
          ({wishlist.length} items)
        </span></h1>

        <Link to="/" className="text-primary underline">
          <p>Continue Shoppingh</p>
        </Link>

      </div>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No items in your wishlist.</p>
      ) : (
        <div className="space-y-2">
          {wishlist.map((product, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-white transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Product Image */}
              <div className="w-28 h-28 overflow-hidden rounded-lg">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                <p className="text-xs text-gray-400 mt-1">{product.category}</p>
              </div>

              {/* Price & Remove Button */}
              <div className="flex flex-col items-end">
                <p className="text-lg font-bold text-primary">${product.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeFromWishlist(product.id)}
                  className="bg-red-500 text-white px-3 py-1 mt-2 rounded-md flex items-center gap-1 hover:bg-red-600 transition"
                >
                  <Trash2 size={16} /> Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
