import BlogSection from "../components/PlaceDetailsPage/BlogSection/BlogSection";
import Breadcrumbs from "../components/PlaceDetailsPage/Breadcrumbs/Breadcrumbs";
import HeroSection from "../components/PlaceDetailsPage/HeroSection/HeroSection";
import Hoteljodhpurcard from "../components/PlaceDetailsPage/Hoteljodhpurcard/Hoteljodhpurcard";
import InclusionExclusionTabs from "../components/PlaceDetailsPage/InclusionExclusionTabs/InclusionExclusionTabs";
import Itinerary from "../components/PlaceDetailsPage/Itinerary/Itenerary";
import Jodhpurholidaycard from "../components/PlaceDetailsPage/Jodhpurholidaycard/Jodhpurholidaycard";
import Jodhpurothercard from "../components/PlaceDetailsPage/JodhpurOtherCard/Jodhpurothercard";
import Jodhpurcard from "../components/PlaceDetailsPage/JoshpurCard/Jodhpurcard";
import Packagesrajastancard from "../components/PlaceDetailsPage/Packagerajasthancard/Packagesrajastancard";
import Rajastantravelcard from "../components/PlaceDetailsPage/Rajasthantravelcard/Rajastantravelcard";
import Toptouristcard from "../components/PlaceDetailsPage/Toptouristcard/Toptouristcard";

const Contact = () => {
  return <div className="text-xl text-center">
  
    <Breadcrumbs/>
  <HeroSection/>
  <Itinerary/>
  <Toptouristcard/>
  <Packagesrajastancard/>

  <InclusionExclusionTabs/>
  {/* <Jodhpurcard/> */}
  <Jodhpurholidaycard/>
  <Jodhpurothercard/>
  <Hoteljodhpurcard/>
  <Rajastantravelcard/>

  <BlogSection/>
 
  </div>;
};

export default Contact;
