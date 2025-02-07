import React from 'react';
import { productData } from '../../Data/Data.js';

export default function CardPallete() {
  return (
    <div className="flex justify-center items-center flex-wrap  p-4 gap-4">
      {productData.map((product, ind) => (
        <div
          key={ind}
          className="w-80 bg-gradient-to-b from-red-500 to-orange-400 text-center p-6 relative shadow-lg rounded-tr-4xl rounded-bl-4xl rounded-tl-[6rem] rounded-br-[6rem] transform transition duration-500  hover:shadow-2xl"
        >
          <h2 className="text-white text-lg font-bold">{product.title}</h2>
          <p className="text-white text-sm my-2 line-clamp-2">{product.description}</p>
          <div className='bg-red-500 rounded-full w-60 h-60 flex justify-center items-center mx-auto overflow-hidden relative'>
            <img
              src={product.image}
              alt={product.title}
              className="w-4/5 mx-auto rounded-full my-4 transition duration-500 transform hover:rotate-6"
            />
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-bold px-3 py-1  -rotate-4">₹{product.price}</div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-bold px-3 py-1  rotate-6">₹{product.price}</div>
          <a
            href="#"
            className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold mt-4 transition duration-500 hover:bg-gray-800 hover:shadow-lg hover:scale-105"
          >
            SHOP NOW
          </a>
        </div>
      ))}
    </div>
  );
}