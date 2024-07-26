import React from "react";

const Cuisinehero = ({scrollToAbout}) => {
  return (
    <>
      <section className="bg-no-repeat bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/036/804/355/non_2x/ai-generated-assorted-indian-food-on-dark-wooden-background-free-photo.jpg')]">
        <div className="py-10 px-4 sm:h-[77vh]  flex items-center bg-black/40">
          <div className="max-w-7xl mx-auto  ">
            <div className="  flex flex-col gap-4 text-white">
              <span className="text-3xl md:text-4xl lg:text-5xl text-white text-center mx-4  leading-tight font-bold">
                Welcome to
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-6xl  text-white  text-center mx-4  leading-tight font-bold">
                Cuisine Place
              </h2>
              <h3 className=" text-center  text-white  lg:text-2xl mt-2 font-semibold mx-4">
                Experience the Rich Tapestry of India: A Feast of Bold Flavors
                and Timeless Traditions.
              </h3>
              <div className="text-center">
                <button onClick={scrollToAbout} className=" mt-1 p-2 text-xl rounded font-semibold text-md bg-blue-600 text-white border-2 border-blue-600">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cuisinehero;
