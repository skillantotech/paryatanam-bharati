import { useState } from "react";
import { Popularartcarddata } from "../../../Data/Art&CultureData/Popularartcarddata";

const Popularartcard = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  const toggleVisibleCards = () => {
    if (visibleCards === 3) {
      setVisibleCards(Popularartcarddata.length);
    } else {
      setVisibleCards(3);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mt-12">
      <h2 className="text-3xl font-semibold text-center">Popular Art Destinations In India</h2>
      <div className="flex flex-wrap justify-center mt-2">
        {Popularartcarddata.slice(0, visibleCards).map((card, index) => (
          <div key={index} className="h-80 w-80 m-4">
            <div className="img-container h-48 w-full">
              <p className="text-lg font-medium">{card.headingname}</p>
              <img
                src={card.thumbnail}
                alt={card.headingname}
                className="h-full w-full mt-1 object-cover"
              />
              <p className="mt-2 text-base font-normal border-l-4 border-blue-500 p-2">
                {card.about}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <button
          onClick={toggleVisibleCards}
          className="relative text-black font-semibold group bg-transparent border-none outline-none"
        >
          {visibleCards === 3 ? "View More" : "View Less"}
          <span
            className={`absolute block h-0.5 bg-blue-500 transition-all duration-300 ${
              visibleCards === 3 ? 'w-0 group-hover:w-full' : 'w-full'
            }`}
            style={{ bottom: '-5px' }}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Popularartcard;



