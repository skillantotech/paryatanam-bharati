import { PackagesData } from "../../../Data/StatesData/PackagesData";

function Packages() {
  return (
    <>
      <div className="max-w-7xl mx-4 xl:mx-auto w-full">
        <div className="flex justify-between flex-wrap group">
          <h2 className="text-2xl font-bold text-gray-700 text-center md:text-left pl-6">
            Best Selling Rajasthan Tour Packages
          </h2>
          <div className="group relative">
          <a className="font-bold text-lg" href="">
            View More
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#3B82F6] w-0 group-hover:w-full transition-all duration-300"></div>
        </div>
        </div>
        <div className="grid md:grid-cols-4 pt-5 gap-20 sm:grid-cols-2 grid-cols-1 place-items-center">
          {PackagesData.map((sell, index) => (
            <div key={index} className="h-48 w-60">
              <div className="h-32 w-60">
                <img className="h-full w-full" src={sell.thumbnail} alt="" />
              </div>

              <h3 className="pt-4 text-gray-500 font-bold">{sell.days}</h3>
              <div className="flex mt-4">
                <div className=" h-auto border-l-4 border-[#3B82F6]"></div>
                <p className="pt-2 ml-4">{sell.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Packages;
