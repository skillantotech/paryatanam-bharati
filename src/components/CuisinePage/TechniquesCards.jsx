import React from "react";

function TechniquesCards({ data }) {
  return (
    <>
      <div className="text-3xl my-5">Click to view Details:</div>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8"
        // onClick={() => setInitialHover(false)}
      >
        {data.map((techniques, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded shadow-lg group ${
              index == 7 && "sm:row-span-2  "
            } ${index == 0 && "row-span-2 "} 
            ${index == 8 && "row-span-2 sm:row-auto"}
            md:row-auto `}
          >
            <img
              src={techniques.image}
              className={`aspect-[16/14] object-cover h-full w-full group-hover:scale-110 ease-in-out duration-1000 md:h-auto`}
            />
            <div
              className={`absolute inset-0 bg-black/30 group-hover:bg-black/60  duration-300`}
            >
              <div className="absolute -bottom-1 left-0 right-0 p-2 lg:p-4">
                <h3 className="text-lg md:text-lg lg:text-2xl font-bold text-white">
                  {techniques.method}
                </h3>
                {/* <p className="text-white hidden md:block">
                Discover the beauty of the natural world
              </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TechniquesCards;
