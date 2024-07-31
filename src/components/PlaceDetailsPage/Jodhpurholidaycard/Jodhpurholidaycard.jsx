import React, { useState } from 'react';
import { Jodhpurholidaycarddata } from "../../../Data/StateDetailsData/Jodhpurholidaycarddata";

const Jodhpurholidaycard = () => {
  const [viewMore, setViewMore] = useState(false);

  const displayedCards = viewMore ? Jodhpurholidaycarddata : Jodhpurholidaycarddata.slice(0, 3);

  const handleViewMoreToggle = () => {
    setViewMore(!viewMore);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto lg:mx-auto mt-10">
        <div>
          <h2 className="font-bold text-2xl ml-10 text-center ">Jodhpur Holiday Packages</h2>
        </div>

        <div className="mt-5 flex flex-wrap justify-center">
          {displayedCards.map((card, index) => (
            <div key={index} className="rounded-md mb-6">
              <div className="card-container h-96 w-auto mx-6">
                <div className="img-container h-fit w-80">
                  <div className="relative group">
                    <img
                      src={card.thumbnail}
                      alt=""
                      className="h-80 w-full object-cover m-auto"
                    />
                    {/* <h2 className="absolute z-50 top-16 left-16 text-sm text-white font-bold"> */}
                    {/* <div className="p-2 rounded-2xl hover:bg-blue-700 inline">{card.contentname}</div> */}
                    {/* </h2> */}
                    {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-1000 "></div> */}
                  </div>
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
    </>
  );
};

export default Jodhpurholidaycard;


