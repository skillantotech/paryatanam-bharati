import React from "react";
import office from "./../../assets/Icons/PackagesIcons/office-building-svgrepo-com.svg";
import office1 from "./../../assets/Icons/PackagesIcons/certificate-svgrepo-com.svg";
import office2 from "./../../assets/Icons/PackagesIcons/client-dollar-svgrepo-com.svg";
import office3 from "./../../assets/Icons/PackagesIcons/office-building-svgrepo-com (1).svg";

const PackageFeature = () => {
  return (
    <div className=" max-w-7xl mx-4 xl:mx-auto place-items-center">
      <div className="my-10 flex flex-col gap-10 md:gap-14">
        <div className="text-center text-3xl font-bold">
          Why Paryatanam Bharati for Travel Tours?
        </div>
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
          <div className="">
            <div className="flex items-center justify-center w-24 h-24 mx-auto overflow-hidden bg-blue-100 rounded-full">
              <img className="aspect-[16/9]" src={office} alt="" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
              Experienced
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              An experienced tour operator, with an excellent & experienced team
              of travel experts, we ensure that our clients receive
              well-designed hill stations vacation packages.
            </p>
          </div>

          <div className="">
            <div className="flex items-center justify-center w-24 overflow-hidden h-24 mx-auto bg-orange-100 rounded-full">
              <img src={office1} alt="" className="aspect-[16/9]" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">Certified</h3>
            <p className="mt-4 text-sm text-gray-600">
              We are certified by major tour and travel associations in India
              and world like IATA, IATO, TAAI, IMF, MOT (Ministry of Tourism,
              Govt of India), and TOFT.
            </p>
          </div>

          <div className="">
            <div className="flex items-center justify-center w-24 h-24 overflow-hidden mx-auto bg-green-100 rounded-full">
              <img src={office2} alt="" className="aspect-[16/9]" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
              Happy Customers
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Paryatanam Bharati has received numerous accolades from its happy
              customers for its excellent services and best holiday packages.
            </p>
          </div>

          <div className="">
            <div className="flex items-center justify-center w-24 overflow-hidden h-24 mx-auto bg-red-100 rounded-full">
              <img src={office3} alt="" className="aspect-[16/9]" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
              Local Offices
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              We have local office in Nainital, Mussoorie, Kashmir, Kerala,
              North East India & South India for our customers to find
              assistance anytime and anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageFeature;
