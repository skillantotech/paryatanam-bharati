import { useEffect } from "react";
import Breadcrumbs from "../../components/PlaceDetailsPage/Breadcrumbs/Breadcrumbs";
import HeroSection from "../../components/PlaceDetailsPage/HeroSection/HeroSection";
import Itinerary from "../../components/PlaceDetailsPage/Itinerary/Itenerary";
import Toptouristcard from "../../components/PlaceDetailsPage/Toptouristcard/Toptouristcard";
import Packagesrajastancard from "../../components/PlaceDetailsPage/Packagerajasthancard/Packagesrajastancard";
import InclusionExclusionTabs from "../../components/PlaceDetailsPage/InclusionExclusionTabs/InclusionExclusionTabs";
import Jodhpurholidaycard from "../../components/PlaceDetailsPage/Jodhpurholidaycard/Jodhpurholidaycard";
// import JodhpurOtherCard from "../../components/PlaceDetailsPage/JodhpurOtherCard/JodhpurOtherCard";
import OtherTravelPackages from "../../components/PlaceDetailsPage/OtherTravelPackages/OtherTravelPackages";
import Hoteljodhpurcard from "../../components/PlaceDetailsPage/Hoteljodhpurcard/Hoteljodhpurcard";
import Rajastantravelcard from "../../components/PlaceDetailsPage/Rajasthantravelcard/Rajastantravelcard";
import BlogSection from "../../components/PlaceDetailsPage/BlogSection/BlogSection";

const PlaceDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <HeroSection />
      <Itinerary />
      <InclusionExclusionTabs />
      <Toptouristcard />
      <Packagesrajastancard />
      <Jodhpurholidaycard />
      {/* <JodhpurOtherCard /> */}
      <OtherTravelPackages/>
      <Hoteljodhpurcard />
      <Rajastantravelcard />
      <BlogSection />
    </div>
  );
};

export default PlaceDetailsPage;
