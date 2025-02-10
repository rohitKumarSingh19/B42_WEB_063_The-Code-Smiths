import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Edit } from "lucide-react";
import { productData } from "../data/Data";

export default function Products() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="ml-72 p-6">
      <h1 className="text-3xl font-semibold">Manage Products</h1>
      <div className="mt-4 space-y-4">
        {products.map((product) => (
          <motion.div key={product.id} className="p-4 bg-white shadow-md flex justify-between rounded-lg">
            <div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className={`text-sm ${product.stock ? "text-green-600" : "text-red-500"}`}>
                {product.stock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div className="flex gap-4">
              <motion.button onClick={() => alert("Update")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                <Edit size={16} />
              </motion.button>
              <motion.button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                <Trash2 size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
