import { useState } from "react";

const images1 = [
  "https://images.pexels.com/photos/20583471/pexels-photo-20583471/free-photo-of-mountains-in-jammu-and-kashmir-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20629719/pexels-photo-20629719/free-photo-of-two-people-on-a-dhow-boat-in-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5725209/pexels-photo-5725209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19170577/pexels-photo-19170577/free-photo-of-golden-statues-in-buddha-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4430322/pexels-photo-4430322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7919683/pexels-photo-7919683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20514806/pexels-photo-20514806/free-photo-of-city-god-pavilion-above-the-hangzhou-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

// const images2 = images1.slice().reverse();
const images2 = [
  "https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19170577/pexels-photo-19170577/free-photo-of-golden-statues-in-buddha-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7919683/pexels-photo-7919683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20514806/pexels-photo-20514806/free-photo-of-city-god-pavilion-above-the-hangzhou-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20623791/pexels-photo-20623791/free-photo-of-lotus-temple-in-new-delhi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20633074/pexels-photo-20633074/free-photo-of-view-of-the-gaumukh-kund-reservoir-in-chittorgarh-fort-chittorgarh-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20628916/pexels-photo-20628916/free-photo-of-shrine-in-himalaya-mountains-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20583471/pexels-photo-20583471/free-photo-of-mountains-in-jammu-and-kashmir-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20629719/pexels-photo-20629719/free-photo-of-two-people-on-a-dhow-boat-in-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const MarqueeSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="scrollbar-section w-full mt-4 flex flex-col gap-4">
      {/* Scrollbar 1 */}
      <div className="scrollbar-wrapper w-full flex flex-row justify-end flex-nowrap">
        {/* Original Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-end [&_a]:mx-6 animate-scrollX"
        >
          {images1.map((imgsrc, index) => (
            <a
              key={index}
              className="scrollbar-image-container h-24 lg:h-28 w-32 lg:w-36 duration-300 hover:scale-105 bg-slate-300 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={imgsrc}
                alt="image"
              />
            </a>
          ))}
        </div>
        {/* Duplicate Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-end [&_a]:mx-6 animate-scrollX"
        >
          {images1.map((imgsrc, index) => (
            <a
              key={index}
              className="scrollbar-image-container h-24 lg:h-28 w-32 lg:w-36 duration-300 hover:scale-105 bg-slate-300 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={imgsrc}
                alt="image"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Scrollbar2 */}
      <div className="scrollbar-wrapper w-full flex flex-row justify-start flex-nowrap">
        {/* Original Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{ animationPlayState: isHovered2 ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-start [&_a]:mx-6 animate-reverseScrollX"
        >
          {images2.map((imgsrc, index) => (
            <a
              key={index}
              className="scrollbar-image-container h-24 lg:h-28 w-32 lg:w-36 duration-300 hover:scale-105 bg-slate-300 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={imgsrc}
                alt="image"
              />
            </a>
          ))}
        </div>
        {/* Duplicate Scrollbar */}
        <div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{ animationPlayState: isHovered2 ? "paused" : "running" }}
          className="scrollbar flex items-center justify-center md:justify-start [&_a]:mx-6 animate-reverseScrollX"
        >
          {images2.map((imgsrc, index) => (
            <a
              key={index}
              className="scrollbar-image-container h-24 lg:h-28 w-32 lg:w-36 duration-300 hover:scale-105 bg-slate-300 shadow-md shadow-slate-500 border-2 rounded-sm overflow-hidden"
            >
              <img
                className="w-full h-full object-cover aspect-[16/9] rounded-sm"
                src={imgsrc}
                alt="image"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
