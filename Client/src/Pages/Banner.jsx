import React, { useState, useEffect } from 'react';
import banner1 from '../../src/assets/bannerImage0.avif';
import banner2 from '../../src/assets/bannerImage1.webp';
import banner3 from '../../src/assets/bannerImage2.webp';
import banner4 from '../../src/assets/bannerImage3.jpg';
import banner5 from '../../src/assets/bannerImage4.jpg';

import { FaChevronLeft, FaChevronRight, FaRegClone } from "react-icons/fa";

const bannerData = [banner1, banner2, banner3, banner4, banner5];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  };

  const prevBanner = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + bannerData.length) % bannerData.length
    );
  };

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextBanner, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-[20vh] sm:h-[20vh] lg:h-[30vh] flex justify-center items-center overflow-hidden">

      {/* Left button */}
      <button
        onClick={prevBanner}
        className="absolute left-4 sm:left-8 text-white text-3xl sm:text-4xl z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-300"
      >
        <FaChevronLeft />
      </button>

      {/* Banner */}
      <div className="w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {bannerData.map((banner, ind) => (
            <div key={ind} className="flex-shrink-0 w-full h-full">
              <img
                src={banner}
                alt={`banner-${ind}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Deal of the Day Component */}
      <div className="absolute right-1/6 sm:right-1/12  text-darkgray border-2 border-primary px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center space-y-2 backdrop-blur-xl bg-white/30 border-opacity-30">
        <p className="text-lg sm:text-xl font-semibold">Deal Of The Day</p>
        <span className="border-2 border-dotted border-white px-6 py-3 rounded-md text-xl sm:text-3xl font-bold text-yellow-400 bg-white shadow-md flex gap-4">
          VENDO10<FaRegClone className='text-secondary' />

        </span>
        <i className="text-base sm:text-lg text-darkgray opacity-75">Grab Your Deal</i>
      </div>

      {/* Right button */}
      <button
        onClick={nextBanner}
        className="absolute right-4 sm:right-8 text-white text-3xl sm:text-4xl z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-300"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
