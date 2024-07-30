import React, { useState } from "react";
import { DanceDataDetails } from "../../../Data/Art&CultureData/DanceDataDetails";
import Modal from "./Modal";

function DanceCard() {
  const [selectedDance, setSelectedDance] = useState(null);

  const openModal = (dance) => {
    setSelectedDance(dance);
  };

  const closeModal = () => {
    setSelectedDance(null);
  };

  return (
    <>
      <div className="max-w-7xl mx-4 xl:mx-auto place-items-center my-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-5 justify-items-center mt-6">
          {DanceDataDetails.map((dance, index) => (
            <div key={index} className="overflow-hidden">
              <div
                className="m-auto relative overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                onClick={() => openModal(dance)}
              >
                <div className="h-[450px] w-80">
                  <img
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                    src={dance.thumbnail}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-40 text-white top-0 left-0 w-80 h-full flex items-center justify-center bg-transparent rounded-lg transform transition-transform duration-300 hover:bg-black/50">
                  <h2 className="text-2xl font-bold border p-2">
                    {dance.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedDance && <Modal dance={selectedDance} onClose={closeModal} />}
    </>
  );
}

export default DanceCard;
