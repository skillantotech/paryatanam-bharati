import { TravelData } from "../../../Data/StatesData/TravelData";
function Travel() {
  return (
    <>
      <div className="max-w-7xl mx-auto place-items-center mt-12  sm:px-10">
        <div className="flex items-center w-full ">
          <h2 className=" text-center text-2xl font-bold">
            Exclusive Collection Of Travel Blogs
          </h2>
          {/* <a className="font-bold ml-auto text-lg border-b-2 border-[#3B82F6]" href="">View More</a> */}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-20 lg:gap-10 place-items-center">
          {TravelData.map((travel, index) => (
            <div key={index} className="h-80 lg:w-96  rounded-md w-3/4 ">
              <div className=" h-48">
                <img
                  className="w-full h-full rounded-t-md"
                  src={travel.thumbnail}
                  alt=""
                />
              </div>
              <div className="mt-3 ">
                <p className="text-gray-600 pl-5">{travel.date}</p>
                <div className="flex ">
                  <div className=" h-auto border-l-4 border-[#3B82F6] pl-5"></div>
                  <h3 className="pt-3 font-bold">{travel.desc}</h3>
                </div>
                {/* <button className="font-bold  ml-64">{travel.learn}</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Travel;
