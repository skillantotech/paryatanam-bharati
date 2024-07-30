import React from "react";
import { DanceDataDetails } from "../../../Data/Art&CultureData/DanceDataDetails";

function Dance() {
  return (
    <>
      <div className="max-w-7xl mx-4 xl:mx-auto lg:mx-auto place-items-center my-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="justify-center md:justify-end overflow-hidden">
            <img
              className="lg:h-full w-full rounded transform transition-transform duration-500 ease-in-out hover:scale-105"
              src="https://www.holidify.com/images/cmsuploads/compressed/776px-Bharathanatyam_By_Ranjitha_20200416163143.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-3/5">
            <div className="py-4">
              <h2 className="text-3xl lg:text-4xl text-blue-600 font-semibold">
                Dance: A Universal Language of Expression and Connection
              </h2>
              <h3 className="text-md text-gray-700 text-justify py-4 leading-6">
                Dance is a universal form of expression that transcends cultural
                and linguistic barriers. It involves rhythmic body movements,
                often set to music, and can be performed solo, with a partner,
                or in a group. Dance has ancient roots in ritual and ceremony,
                evolving through various forms such as classical ballet, folk
                traditions, and modern styles. Each dance form reflects its
                cultural origins, from the elegance of ballet to the passionate
                movements of flamenco and the dynamic energy of hip-hop. Dance
                serves multiple purposes, including storytelling, celebration,
                and personal expression. It promotes physical health by
                enhancing strength, flexibility, and coordination. Mentally,
                dance reduces stress and boosts cognitive function. Socially, it
                fosters community and cultural identity. In modern times, dance
                permeates media, from film and television to viral social media
                trends. Technology has further expanded dance's reach through
                virtual classes and innovative tools like motion capture and
                augmented reality. Ultimately, dance continues to inspire and
                connect people worldwide, celebrating the diversity and unity of
                human experience.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dance;
