import React, { useState } from "react";

export default function CheckOutPallete({ name, address, subtotal, discount, totalItems }) {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(discount);

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setAppliedDiscount(subtotal * 0.1);
    } else {
      setAppliedDiscount(0);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg sticky top-10 right-10">
      {/* Address Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div className="flex gap-2 items-baseline">
          <input type="radio" checked className="" />
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
        <button className="text-primary hover:underline">Edit</button>
      </div>

      {/* Discount Code Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Do you have any discount code?</h3>
        <p className="text-gray-500 text-sm">Only one discount code per order can be applied.</p>
        <div className="flex mt-2">
          <input
            type="text"
            className="border p-2 flex-1 rounded-l-lg"
            placeholder="Enter Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button
            onClick={applyDiscount}
            className="bg-primary text-white px-4 py-2 rounded-r-lg hover:opacity-80"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal ({totalItems} items)</p>
          <p className="font-semibold">₹ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Delivery Charge</p>
          <p className="font-semibold text-primary">Free</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Discount</p>
          <p className="font-semibold text-red-500">- ₹ {appliedDiscount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-t pt-3">
          <p className="text-lg font-semibold">Total (INR)</p>
          <p className="text-lg font-bold">₹ {(subtotal - appliedDiscount).toFixed(2)}</p>
        </div>
        <button className="w-full mt-3 bg-primary text-white py-3 rounded-lg hover:opacity-80">
          Checkout
        </button>
      </div>
    </div>
  );
}
