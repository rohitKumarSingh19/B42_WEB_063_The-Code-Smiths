import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Flip } from 'react-toastify';

export default function CardPallete({ title, description, image, price }) {

  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  // add to cart
  const addToCart = () => {
    setCart([...cart, { title, price, image }]);
    console.log("Cart:", cart);
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  }

  const addToWishList = () => {
    setWishlist([...wishlist, { title, price, image }]);
    console.log("Wishlist:", wishlist);
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  }


  return (
    <div>

      <div
        className="w-80 bg-gradient-to-b from-red-500 to-orange-400 text-center p-6 relative shadow-lg rounded-tr-4xl rounded-bl-4xl rounded-tl-[6rem] rounded-br-[6rem] transform transition duration-500 hover:shadow-2xl"
      >
        <button onClick={addToWishList}
          className='absolute bg-black text-white  p-4 right-0 top-0  rounded-tr-4xl rounded-bl-4xl hover:text-red-500'><GrFavorite className='hover:font-bold text-2xl' /></button>
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white text-sm my-2 line-clamp-2">{description}</p>
        <div className="bg-red-500 rounded-full w-60 h-60 flex justify-center items-center mx-auto overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-4/5 mx-auto rounded-full my-4 transition duration-500 transform hover:rotate-6"
          />
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-bold px-3 py-1 -rotate-4">₹{price}</div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-bold px-3 py-1 rotate-6">₹{price}</div>
        <div className='flex justify-between items-center'>
          <button
            onClick={addToCart}
            aria-label="Increase quantity"
            className="border-2 p-2 rounded-full bg-black text-white transform duration-500 hover:-rotate-180"
          >
            <IoMdAdd />
          </button>
          <Link
            to="/product-details"
            className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold mt-4 transition duration-500 hover:bg-gray-800 hover:shadow-lg hover:scale-105"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>

  );
}