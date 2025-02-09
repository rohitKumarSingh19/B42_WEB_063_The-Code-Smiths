import React, { useState } from "react";
import { productData } from "../../Data/Data";
import WisePalette from "../../UI/Pallete/WisePallete";
import { Link } from "react-router-dom";
import CheckOutPallete from "../../UI/Pallete/CheckOutPallete";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(productData);

  // Remove item from cart
  const handleRemove = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className=" mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-4xl font-bold">
          Shopping Cart <span className="text-primary text-xl">({cartItems.length} items)</span>
        </h1>
        <Link to="/" className="text-primary underline">
          Continue Shopping
        </Link>
      </div>

      {/* Cart & Checkout Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart List */}
        <div className="flex-1 ">
          {cartItems.length > 0 ? (
            cartItems.map((product, index) => (
              <WisePalette
                key={index}
                title={product.title}
                image={product.image}
                description={product.description}
                discountedPrice={product.price}
                onRemove={() => handleRemove(index)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Checkout Section */}
        <div className="w-full md:w-1/3 static">
          <CheckOutPallete
            name="Utkarsh Raj"
            address="123 Street, Mumbai, India"
            subtotal={cartItems.reduce((acc, item) => acc + item.price, 0)}
            discount={0}
            totalItems={cartItems.length}
          />
        </div>
      </div>
    </div>
  );
}
