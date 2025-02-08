import React from 'react';

export default function ProductDetailPallete({
  title,
  image,
  category,
  description,
  price,
  totalBuy,
  discountedPrice,
  rating,
}) {
  return (
    <div
      className='flex flex-col md:flex-row items-center bg-gradient-to-b from-red-500 to-orange-400 shadow-lg  p-6 transition-transform duration-300 ease-in-out'
    >
      <div className='w-full md:w-1/2 flex justify-center'>
        <img src={image} alt={title} className='w-80 h-80 p-10 object-cover bg-red-500 rounded-full shadow-md' />
      </div>

      <div className='md:w-1/2 p-4 text-white '>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-white mt-2'>{description}</p>
        <p className='text-white text-sm uppercase'>category</p>
        <div className='mt-4'>
          <p className='text-lg font-semibold text-yellow-400'>₹{discountedPrice} <span className='text-white line-through ml-2'>₹{price}</span></p>
        </div>
        <div className='mt-4 flex items-center gap-4'>
          <p className='text-yellow-400 text-lg font-semibold'>⭐ {rating}</p>
          <p className='text-white text-sm'>{totalBuy} Sold</p>
        </div>
        <a
          href='#'
          className='inline-block bg-black text-white px-6 py-2 rounded-full font-bold mt-4 transition duration-500'
        >
          SHOP NOW
        </a>
      </div>

    </div>
  );
}
