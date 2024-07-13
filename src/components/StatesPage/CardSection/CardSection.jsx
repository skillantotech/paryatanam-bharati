import { Data } from "../../../Data/StatesData/Data";
import { VscChevronRight } from "react-icons/vsc";

const CardSection = () => {
  return (
    <>
      <div className="flex max-w-7xl place-items-center mx-auto mt-16">
        <h2 className="font-bold text-2xl">Best Places to Visit in Rajasthan</h2>
        <div className="ml-auto group relative">
          <a className="font-bold text-lg" href="">
            View More
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#3B82F6] w-0 group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 max-w-7xl place-items-center m-auto gap-y-7 gap-x-32 mt-5">
        {Data.map((card, index) => (
          <div key={index} className="w-auto">
            <div className="h-56 overflow-hidden">
              <img
                className="h-full w-full hover:scale-110 duration-300"
                src={card.thumbnail}
                alt=""
              />
            </div>
            <div className="text-start">
              <h2 className="text-xl font-bold pt-3">{card.name}</h2>
              <div className="flex mt-4">
                <div className="h-auto border-l-4 border-[#3B82F6]"></div>
                <h5 className="text-sm ml-5">{card.desc}</h5>
              </div>
              <div className="mt-8 flex justify-between place-items-center">
                <h3 className="font-semibold bg-[#3B82F6] rounded-2xl text-center h-7 w-28">
                  {card.about}
                </h3>
                <button className="flex group">
                  {card.learn}
                  <div className="ps-2 group-hover:translate-x-2 transition-all duration-300 ease-out pt-1">
                    <VscChevronRight className="size-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSection;
