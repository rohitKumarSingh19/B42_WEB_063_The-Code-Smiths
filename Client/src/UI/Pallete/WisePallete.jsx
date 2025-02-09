import React, { useState } from "react";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";

export default function WisePalette({ title, image, description, discountedPrice, onRemove }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center justify-between p-4  border-b-gray-200 border-b">
      {/* Product Image */}
      <img src={image} alt={title} className="w-32 h-32 rounded-lg bg-gray-200 " />

      {/* Product Details */}
      <div className="flex-1 px-4 ">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-primary font-bold">₹ {discountedPrice?.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button onClick={decreaseQuantity} className="text-gray-500 hover:text-black">
          <MinusCircle size={24} />
        </button>
        <span className="font-bold text-lg">{quantity}</span>
        <button onClick={increaseQuantity} className="text-gray-500 hover:text-black">
          <PlusCircle size={24} />
        </button>
      </div>

      {/* Remove Item Button */}
      <button onClick={onRemove} className="text-red-500 hover:text-red-700 ml-4">
        <Trash2 size={24} />
      </button>
    </div>
  );
}
