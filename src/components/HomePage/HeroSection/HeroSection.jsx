import HeroBackground from "../../../assets/videos/mixkit-night-sky-with-stars-at-a-calm-lake-time-lapse-1704-medium.mp4";
// import HeroBackground from "../../assets/videos/mixkit-view-of-the-horizon-in-the-sea-while-a-sailboat-4477-medium.mp4";
import { FaAngleRight } from "react-icons/fa6";
import MarqueeSection from "./MarqueeSection";

const HeroSection = () => {
  return (
    <div className="relative h-[calc(100dvh-120px)] md:h-[calc(100dvh-96px)] overflow-hidden">
      {/* Video Background */}
      <div className="absolute h-full w-full z-[-1]">
        <video className="h-full w-screen object-cover" autoPlay loop muted>
          <source
            className="h-full w-full"
            src={HeroBackground}
            type="video/mp4"
          ></source>
        </video>
      </div>
      {/* Video Background End */}

      {/* Hero Contents */}
      <div className="h-full flex flex-col items-center justify-around text-center text-white z-[1] pb-1">
        <div className="hero-texts mt-1 md:mt-2 lg:mt-12 flex flex-col gap-4">
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold mx-auto w-[90%] md:w-[60%] lg:w-[50%]">
            Discover the Magic of India&apos;s Landmarks
          </h3>
          <p className="text-base px-5 mx-auto w-[90%] md:w-[60%] lg:w-[50%]">
            Embark on a journey to explore the rich heritage and breathtaking
            beauty of India. From the majestic Taj Mahal to the serene
            backwaters of Kerala, experience the wonders of this incredible
            country.
          </p>
          <div className="hero-buttons py-2 flex flex-row justify-center items-center gap-5">
            <a href="#exploreVideo" onClick={(e) => { e.preventDefault(); window.scrollBy({ top: 600, behavior: 'smooth' }); }} className="bg-white text-black py-2 px-4 border border-white hover:bg-slate-200 transition-all duration-500 ease-in-out rounded-sm">
              Explore
            </a>
            <button className="py-2 px-4 flex flex-row whitespace-nowrap items-center border border-white hover:bg-white hover:text-black group transition-all duration-500 ease-in-out backdrop-blur-md rounded-sm">
              <span className="pe-2">Book Now</span>
              <span className="">
                <FaAngleRight className="text-sm group-hover:translate-x-1 transition-all duration-300 delay-[-75ms]" />
              </span>
            </button>
          </div>
        </div>

        <MarqueeSection />
        
      </div>
      {/* Hero Contents End */}
    </div>
  );
};

export default HeroSection;
