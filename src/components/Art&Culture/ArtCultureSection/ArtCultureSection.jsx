import React from 'react';
import { VscChevronRight } from "react-icons/vsc";

const ArtCultureSection = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-4 xl:mx-auto gap-8 mt-12 mb-12 rounded-lg shadow-lg overflow-hidden">
      <div className="lg:w-1/2 flex flex-col justify-center text-center p-6">
        <h4 className="font-medium uppercase tracking-wider text-gray-600">
          Art & Culture
        </h4>
        <h2 className="pb-5 pt-3 text-3xl sm:text-4xl font-bold text-gray-800">
          Explore the rich tapestry of art and culture
        </h2>
        <p className="text-gray-700 mb-2">
          Discover the rich tapestry of art and culture that defines our heritage. 
          From ancient traditions to modern expressions, immerse yourself in the 
          vibrant world of creativity and history.
        </p>
      
        {/* <div className="flex justify-center items-center gap-5 mt-6">
          <button className="group flex items-center font-semibold text-blue-600 hover:text-blue-800">
            View More
            <div className="pl-2 group-hover:translate-x-2 transition-all duration-300 ease-out">
              <VscChevronRight />
            </div>
          </button>
        </div> */}
      </div>

      <div className="lg:w-1/2 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-500 ease-in-out hover:scale-110"
          src="https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Art and Culture"
        />
      </div>
    </div>
  );
};

export default ArtCultureSection;




