import React from "react";
import { FaStar } from "react-icons/fa";

export default function ProductDetailPalette({
  title,
  image,
  category,
  description,
  price,
  totalBuy,
  discountedPrice,
  rating,
  reviews,
}) {
  return (
    <div className="p-6">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-b from-red-500 to-orange-400 shadow-lg p-6 transition-transform duration-300 ease-in-out rounded-lg">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-100 h-100 p-4 object-cover bg-red-500 rounded-full shadow-md"
          />
        </div>

        <div className="md:w-1/2 p-4 text-white">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-white py-2">{description}</p>
          <p className="text-sm uppercase bg-amber-500 inline-block px-3 py-1 rounded-full">
            category
          </p>
          <p className="text-xl line-through py-2">₹{price}</p>
          <p className="inline-block text-xl font-semibold bg-yellow-400 text-black px-4 py-2 -rotate-3 rounded-md">
            ₹ {discountedPrice}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <p className="text-yellow-400 text-lg font-semibold flex items-center">
              <FaStar className="mr-1" /> {rating}
            </p>
            <p className="text-white text-sm">({totalBuy} bought)</p>
          </div>
          <a
            href="#"
            className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold mt-4 transition duration-500 hover:bg-gray-800"
          >
            SHOP NOW
          </a>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <FaStar className="text-yellow-500" />
                <p className="text-gray-800 font-semibold">{review.rating}</p>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-2">Reviewed on {new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}