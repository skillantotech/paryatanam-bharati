import React, { useState } from "react";
import { Packagesrajastancarddata } from "../../../Data/PlaceDetailsData/Packagesrajastancarddata";
import { FaAngleRight } from "react-icons/fa6";

const Packagesrajastancard = () => {
  const [visibleCards, setVisibleCards] = useState(3); // Initial number of visible cards

  const handleViewMore = () => {
    setVisibleCards(Packagesrajastancarddata.length);
  };

  const handleViewLess = () => {
    setVisibleCards(3); // Reset to initial number of visible cards
  };

  return (
    <>
      <div className="max-w-7xl p-4 mx-auto">
        <div>
          <h2 className="font-bold text-3xl text-center">
            Other Travel Packages Rajasthan
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center transition-all duration-500">
          {Packagesrajastancarddata.slice(0, visibleCards).map(
            (card, index) => (
              <div
                key={index}
                className="rounded-md mx-6 my-4 w-80 transition-transform duration-500 transform hover:scale-105"
              >
                <div className="card-container h-auto shadow-md">
                  <div className="img-container relative group h-80 w-auto">
                    <img
                      src={card.thumbnail}
                      alt=""
                      className="h-full w-full m-auto  transition-transform duration-300"
                    />
                    <div className="absolute z-50 top-10 left-5 text-2xl text-white font-bold">
                      {card.headingname}
                    </div>
                    <div className="absolute z-50 top-20 left-5 text-sm text-white font-bold">
                      {card.activities}
                    </div>
                    <div className="absolute z-50 bottom-5 rounded-full right-5 text-lg text-white font-bold border p-2 hover:bg-blue-500">
                      <FaAngleRight />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-10 flex justify-center">
          {visibleCards < Packagesrajastancarddata.length ? (
            <button
              onClick={handleViewMore}
              className="px-6 py-2 bg-blue-600 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700"
            >
              View More
            </button>
          ) : (
            <button
              onClick={handleViewLess}
              className="px-6 py-2 bg-blue-600 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Packagesrajastancard;
