import { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Popularartcarddata } from "../../../Data/Art&CultureData/Popularartcarddata";
import { Link } from "react-router-dom";

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
      <h2 className="text-3xl font-semibold text-center">
        Popular Art Destinations In India
      </h2>
      <div className="flex flex-wrap justify-center mt-2 gap-y-4">
        {Popularartcarddata.slice(0, visibleCards).map((card, index) => (
          <Link
            to={"/discover-india/place"}
            key={index}
            className="h-80 w-80 m-4 hover:-translate-y-1 duration-500 ease-in-out"
          >
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
              <button className="flex items-center font-semibold text-blue-500 group mt-2 ms-auto">
                Explore
                <VscChevronRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={toggleVisibleCards}
          className="relative text-black font-semibold group bg-transparent border-none outline-none"
        >
          {visibleCards === 3 ? "View More" : "View Less"}
          <span
            className="absolute block h-0.5 bg-blue-500 transition-all duration-300 w-0 group-hover:w-full"
            style={{ bottom: "-5px" }}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Popularartcard;
