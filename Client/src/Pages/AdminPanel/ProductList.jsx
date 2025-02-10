import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Edit } from "lucide-react";
import { productData } from "../../Data/Data";

export default function AdminProductList() {
  const [products, setProducts] = useState(productData);

  // Delete Product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Update Product (Placeholder for real functionality)
  const handleUpdate = (id) => {
    alert(`Update product with ID: ${id}`);
  };

  return (
    <div className="min-h-screen  bg-gray-900 text-white p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-white">Product List</h1>
        <span className="text-lg text-gray-600">Manage your inventory</span>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No products available.</p>
      ) : (
        <div className="space-y-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-gray-900 flex items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Product Image */}
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold text-white">{product.title}</h2>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-lg font-bold text-green-600">${product.price}</p>
                <p className={`text-sm font-medium ${product.stock ? "text-green-500" : "text-red-500"}`}>
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleUpdate(product.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-blue-600 transition"
                >
                  <Edit size={16} /> Update
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-red-600 transition"
                >
                  <Trash2 size={16} /> Delete
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
