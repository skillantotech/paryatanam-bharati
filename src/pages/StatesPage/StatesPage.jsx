import Breadcrumbs from "../../components/StatesPage/Breadcrumbs/Breadcrumbs";
import Hero from "../../components/StatesPage/HeroSection/Hero";
import HillStationSlider from "../../components/StatesPage/HillStationSlider/HillStationSlider";
import Overview from "../../components/StatesPage/Overview/Overview";
// import HeadlineCards from "../../components/StatesPage/HeadlineCards/HeadlineCards";
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
// import CardContainer from "../../components/StatesPage/CardContainer/CardContainer";

const StatesPage = () => {
  return (
    <div>
      <Hero />
      <HillStationSlider />
      <Breadcrumbs />
      <Overview />
      {/* <HeadlineCards/> */}
      {/* <BestTimeToVisit/> */}
      <Packages />
      <CardSection />
      {/* <HowToReach/> */}
      <StateFAQs />
      <StateInfo />
      <Travel />
      <Tourist />
      {/* <Slider/> */}
      {/* <HolidayCard/> */}
      <ExploreCard />
      <QuickLinks />
      {/* <div className="bg-gray-800 min-h-screen flex items-center justify-center">
    <CardContainer/>
  </div> */}
    </div>
  );
};

export default StatesPage;
