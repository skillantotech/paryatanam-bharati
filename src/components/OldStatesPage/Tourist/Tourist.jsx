
import { TouristData } from "../../../Data/StatesData/TouristData";
// import { VscArrowRight } from "react-icons/vsc";

function Tourist() {
  return (
    <>
      <div className="flex max-w-7xl place-items-center m-auto mt-7">
        <h2 className="font-bold text-2xl">
          Popular Tourist Attractions in Rajasthan
        </h2>
        <div className="ml-auto group relative">
          <a className="font-bold text-lg" href="">
            View More
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#3B82F6] w-0 group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-4 xl:mx-auto mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {TouristData.map((tour, index) => (
            <div
              key={index}
              className="h-[400px] w-auto max-w-md mx-auto  overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="relative h-60 w-auto overflow-hidden">
                <img
                  className=" w-full h-full object-cover"
                  src={tour.thumbnail}
                  alt=""
                />
              </div>
              <div className=" bg-white ">
                <h3 className="text-xl font-bold  p-3">{tour.placename}</h3>
                <div className="border-l-4 border-[#3B82F6]">
                  <p className="text-gray-700 p-3">{tour.desc}</p>
                </div>
                {/* <button className="flex items-center text-orange-600 font-bold hover:text-orange-900">
                  {tour.button}
                  <VscArrowRight className="ml-2" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tourist;
