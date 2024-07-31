// import React from 'react'
import { Link } from "react-router-dom";
import bharatanatyam from "../../assets/images/CulturalDetails/Traditional Dance/Bharatanatyam.webp";
import kathak from "../../assets/images/CulturalDetails/Traditional Dance/Kathak.webp";
import kathakali from "../../assets/images/CulturalDetails/Traditional Dance/Kathakali.webp";
import kuchipudi from "../../assets/images/CulturalDetails/Traditional Dance/Kuchipudi.webp";
import manipuri from "../../assets/images/CulturalDetails/Traditional Dance/Manipuri.webp";
import mohiniyattam from "../../assets/images/CulturalDetails/Traditional Dance/Mohiniyattam.webp";
import odissi from "../../assets/images/CulturalDetails/Traditional Dance/Odissi.webp";
import sattriya from "../../assets/images/CulturalDetails/Traditional Dance/Sattriya.webp";
import { HiHome } from "react-icons/hi";

const CultureDetails = () => {
  return (
    <section>
      <div className="max-w-7xl mx-4 xl:mx-auto flex flex-row items-center justify-start gap-2 text-base font-semibold my-5 text-blue-500">
        <Link
          to={"/"}
          className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150"
        >
          <HiHome />
          Home
        </Link>
        /<div className="item text-gray-900">Cuisine</div>
      </div>
      <div className="max-w-7xl lg:mx-auto flex mx-4 md:px-4 lg:flex-row xl:px-0 flex-col gap-10 my-10 overflow-hidden">
        <div className="max-w-full">
          <div className="bg-red-500 text-white py-0.5 px-0.5 rounded-lg text-center max-w-12 text-xs uppercase">
            Dance
          </div>
          <h2 className="font-bold text-4xl sm:text-7xl">Odissi</h2>
          <div className="my-5 sm:my-10 bg-slate-400 w-full flex justify-center rounded-lg overflow-hidden ">
            <img className="aspect-[19/10] w-full object-cover" src={odissi} />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet,
            nesciunt vitae libero, eveniet numquam perspiciatis ipsam impedit
            nam debitis odit labore ipsum similique velit? Eos animi voluptates
            aliquam delectus!
            <br></br>
            <br></br>
            Tenetur voluptatum reiciendis inventore esse sequi at corporis
            iusto? Rerum neque ipsa voluptates iure, consequatur incidunt atque
            perferendis molestiae sed nobis omnis perspiciatis, quae non
            expedita obcaecati tempora molestias repellat.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 my-10 md:h-[600px]">
            <div className=" row-span-2 col-span-2 md:col-span-1 relative overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src={odissi} />
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src={odissi} />
            </div>

            <div className="relative overflow-hidden rounded-lg md:col-auto">
              <img className="w-full h-full object-cover" src={odissi} />
            </div>
          </div>
          <h3 className="font-medium text-3xl my-10">Significance</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet,
            nesciunt vitae libero, eveniet numquam perspiciatis ipsam impedit
            nam debitis odit labore ipsum similique velit? Eos animi voluptates
            aliquam delectus!
            <br></br>
            <br></br>
            Tenetur voluptatum reiciendis inventore esse sequi at corporis
            iusto? Rerum neque ipsa voluptates iure, consequatur incidunt atque
            perferendis molestiae sed nobis omnis perspiciatis, quae non
            expedita obcaecati tempora molestias repellat.
          </p>
        </div>
        <div className="lg:min-w-96 max-w-full overflow-hidden">
          <h3 className="  sm:mt-12 font-medium text-3xl sm:text-4xl flex justify-center">
            Categories
          </h3>
          <div className="my-11 grid grid-cols-1 sm:grid-cols-2 place-items-center lg:flex lg:flex-col lg:items-center gap-7 overflow-hidden">
            <div className="relative group rounded-lg overflow-hidden max-w-96 sm:max-w-none sm:col-span-2 lg:max-w-80 h-28 sm:h-56 lg:h-28 ease-in-out duration-1000">
              <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-[1] absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">
                Bharatanatyam
              </div>
              <img
                className="aspect-[16/9] object-cover object-top sm:object-[0_-65px] lg:object-top group-hover:scale-150 ease-in-out duration-1000"
                src={bharatanatyam}
              />
            </div>
            <div className="relative group rounded-lg overflow-hidden max-w-96 sm:w-full sm:max-w-none lg:max-w-80 h-28 ease-in-out duration-1000">
              <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-[1] absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">
                Kathak
              </div>
              <img
                className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000"
                src={kathak}
              />
            </div>
            <div className="relative group rounded-lg overflow-hidden max-w-96 sm:w-full sm:max-w-none lg:max-w-80 h-28 ease-in-out duration-1000">
              <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-[1] absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">
                Mohiniyattam
              </div>
              <img
                className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000"
                src={mohiniyattam}
              />
            </div>
            <div className="relative group rounded-lg overflow-hidden max-w-96 sm:w-full sm:max-w-none lg:max-w-80 sm:row-span-2 h-28 sm:h-full lg:h-28 ease-in-out duration-1000">
              <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-[1] absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">
                Kuchipudi
              </div>
              <img
                className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000"
                src={kuchipudi}
              />
            </div>
            <div className="relative group rounded-lg overflow-hidden max-w-96 sm:w-full sm:max-w-none lg:max-w-80 sm:row-span-2 h-28 sm:h-full lg:h-28 ease-in-out duration-1000">
              <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-[1] absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">
                Manipuri
              </div>
              <img
                className="aspect-[16/9] object-cover sm:h-full lg:h-auto group-hover:scale-150 ease-in-out duration-1000"
                src={manipuri}
              />
            </div>
            <div className="relative group rounded-lg overflow-hidden max-w-96 sm:w-full sm:max-w-none lg:max-w-80 h-28 ease-in-out duration-1000">
              <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-[1] absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">
                Sattriya
              </div>
              <img
                className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000"
                src={sattriya}
              />
            </div>
            <div className="relative group rounded-lg overflow-hidden max-w-96 sm:w-full sm:max-w-none lg:max-w-80 h-28 ease-in-out duration-1000">
              <div className="flex items-center justify-center bg-black/20 group-hover:bg-black/60 w-full h-full z-[1] absolute ease-in-out duration-1000 text-white text-center text-2xl font-semibold">
                Kathakali
              </div>
              <img
                className="aspect-[16/9] object-cover group-hover:scale-150 ease-in-out duration-1000"
                src={kathakali}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureDetails;
