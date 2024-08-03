import React, { useState } from 'react';
import { Jodhpurholidaycarddata } from "../../../Data/StateDetailsData/Jodhpurholidaycarddata";

const Jodhpurholidaycard = () => {
  const [viewMore, setViewMore] = useState(false);

  const displayedCards = viewMore ? Jodhpurholidaycarddata : Jodhpurholidaycarddata.slice(0, 3);

  const handleViewMoreToggle = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mt-10">
      <div>
        <h2 className="font-bold text-3xl text-center">Jodhpur Holiday Packages</h2>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {displayedCards.map((card, index) => (
          <div key={index} className="rounded-md">
            <div className="card-container h-full w-full">
              <div className="img-container h-full w-full">
                <div className="relative group overflow-hidden">
                  <img
                    src={card.thumbnail}
                    alt={card.headingname}
                    className="h-80 w-full object-cover m-auto transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="mt-3 text-left">
                    <div className="text-sm font-bold text-gray-400 mb-2">
                      {card.daysname}
                    </div>
                    <div className="border-[#3B82F6] border-l-4 font-bold text-md pl-2">
                      {card.headingname}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleViewMoreToggle}
        >
          {viewMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Jodhpurholidaycard;


