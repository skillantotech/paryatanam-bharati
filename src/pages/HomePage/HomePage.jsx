import BlogSection from "../../components/HomePage/BlogSection/BlogSection";
import CuisineSection from "../../components/HomePage/CuisineSection/CuisineSection";
import HeroSection from "../../components/HomePage/HeroSection/HeroSection";
import TestimonialSection from "../../components/HomePage/TestimonialSection/TestimonialSection";
import WhyChooseUs from "../../components/HomePage/WhyChooseUs/WhyChooseUs";
import WhyChooseUs2 from "../../components/HomePage/WhyChooseUs/WhyChooseUs2";
import Tours from "../../components/HomePage/ExploreAbout/Tour";
import HitButtonSection from "../../components/HomePage/HitButtonSection/HitBUttonSection";
import ExploreVideoSection from "../../components/HomePage/ExploreVideoSection/ExploreVideoSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <ExplorePackageSection /> */}
      <ExploreVideoSection />
      <Tours />
      {/* <WhyChooseUs /> */}
      <WhyChooseUs2 />
      <CuisineSection />
      <BlogSection />
      <HitButtonSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
