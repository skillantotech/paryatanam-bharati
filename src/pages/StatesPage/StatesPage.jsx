import { useEffect } from "react";
// import Breadcrumbs from "../../components/StatesPage/Breadcrumbs/Breadcrumbs";
import Hero from "../../components/StatesPage/HeroSection/Hero";
import Overview from "../../components/StatesPage/Overview/Overview";
// import BestTimeToVisit from "../../components/StatesPage/BestTimeToVisit/BestTimeToVisit";
import Packages from "../../components/StatesPage/Packages/Packages";
import CardSection from "../../components/StatesPage/CardSection/CardSection";
// import HowToReach from "../../components/StatesPage/HowToReach/HowToReach";
import StateFAQs from "../../components/StatesPage/StateFAQs/StateFAQs";
import StateInfo from "../../components/StatesPage/StateInfo/StateInfo";
import Travel from "../../components/StatesPage/Travel/Travel";
import Tourist from "../../components/StatesPage/Tourist/Tourist";
// import Slider from "../../components/StatesPage/Slider/Slider";
// import HolidayCard from "../../components/StatesPage/HolidayCard/HolidayCard";
import ExploreCard from "../../components/StatesPage/ExploreCard/ExploreCard";
import QuickLinks from "../../components/StatesPage/QuickLinks/QuickLinks";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import Headlinecards from "../../components/StatesPage/Headlinecards/Headlinecards";
// import CardContainer from "../../components/StatesPage/CardContainer/CardContainer";

const StatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Headlinecards/>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-4 xl:mx-auto flex flex-row items-center justify-start gap-2 text-base font-semibold text-blue-500">
            <Link to={"/"} className="item flex items-center gap-2 text-gray-500 hover:text-gray-700 duration-150">
              <HiHome />
              Home
            </Link>/
            <div className="item text-gray-900">StatesPage</div>
          </div>
          {/* Breadcrumb Ends */}
      <Overview />
      {/* <BestTimeToVisit/> */}
      <Packages />
      <CardSection />
      {/* <HowToReach/> */}
      <StateInfo />

      <StateFAQs />

      <Tourist />
      {/* <Slider/> */}
      {/* <HolidayCard/> */}
      <ExploreCard />
      <Travel />


      <QuickLinks />
      {/* <div className="bg-gray-800 min-h-screen flex items-center justify-center">
    <CardContainer/>
  </div> */}
    </div>
  );
};

export default StatesPage;
