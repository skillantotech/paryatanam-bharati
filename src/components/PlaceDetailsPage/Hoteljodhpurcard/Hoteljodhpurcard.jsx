import { Hoteljodhpurcarddata } from "../../../Data/StateDetailsData/Hoteljodhpurcarddata";

const Hoteljodhpurcard = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mb-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-2xl sm:text-3xl text-left">
          Hotels in Jodhpur
        </h2>
        <button className="text-blue-600 font-bold text-md sm:text-lg cursor-pointer relative group transition-all duration-300 ease-in-out hover:text-blue-800">
          View More
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300"></div>
        </button>
      </div>
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Hoteljodhpurcarddata.map((card, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 bg-white"
          >
            <div className="relative group overflow-hidden">
              <img
                src={card.thumbnail}
                alt={card.headingname}
                className="h-64 sm:h-72  md:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-bold">
                {card.headingname}
              </h3>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 "></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hoteljodhpurcard;
