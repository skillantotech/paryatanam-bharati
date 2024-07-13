import { useState } from "react";
// import { Modal } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ExploreVideoSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="exploreVideo" className="max-w-7xl mx-4 xl:mx-auto mt-14">
      <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
        <div className="video-container relative">
          <div className="aspect-video">
            <img
              className="object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About video"
            />
          </div>

          <div
            onClick={() => setOpenModal(true)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          >
            <div className="flex items-center justify-center transition-all duration-300 rounded-full w-20 h-20 group-hover:w-28 group-hover:h-28 group-active:w-24 group-active:h-24 bg-white/20">
              <div
                type="button"
                className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 text-white transition-all duration-150 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 group-hover:opacity-90 group-hover:scale-105 group-active:scale-95"
              >
                {/* Play SVG Image */}
                <svg
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {openModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="relative">
              <button
                className="absolute -top-12 -right-2 p-2 text-white"
                onClick={() => setOpenModal(false)}
              >
                <IoClose className="text-4xl transition-all duration-150 hover:ring-2 ring-white/50 rounded" />
              </button>
              <iframe
                className="rounded-lg w-[90vw] sm:w-[560px] aspect-video"
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/42OaWwyyet4?si=2b0NK7ZXX3aOJoof"
                title="YouTube video player"
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* <Modal
          show={openModal}
          popup={true}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Body className="m-0">
            <IoClose className="text-3xl text-white cursor-pointer text-end w-full mb-5" onClick={() => setOpenModal(false)} />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/42OaWwyyet4?si=2b0NK7ZXX3aOJoof"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal> */}

        <div className="flex flex-col items-start justify-center gap-4 md:py-5">
          <h1 className="text-3xl font-bold">Custom Travel Packages</h1>
          <p className="text-base">
            Discover the world with our custom travel packages, guided tours and
            exclusive experiences. Whether you&apos;re looking for a relaxing
            beach gateaway, an adventurous trek through the mountains, or a
            cultural immersion in a vibrant city, we have perfect itinerary for
            you.
          </p>
          <div className="flex justify-start items-center mt-5 gap-5">
            {/* <button className="border border-black font-semibold px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 rounded"> */}
            <Link to={"/sign-up"} className="font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 rounded">
              Sign Up
            </Link>
            <button className="group flex items-center font-semibold">
              Learn More
              <div className="ps-2 group-hover:translate-x-2 transition-all duration-300 ease-out">
                <VscArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreVideoSection;
