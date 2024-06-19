import ExplorePackageSection from "../../components/HomePage/ExplorePackageSection/ExplorePackageSection";
import BlogSection from "../../components/HomePage/BlogSection/BlogSection";
import CuisineSection from "../../components/HomePage/CuisineSection/CuisineSection";
import HeroSection from "../../components/HomePage/HeroSection/HeroSection";
import TestimonialSection from "../../components/HomePage/TestimonialSection/TestimonialSection";
import WhyChooseUs from "../../components/HomePage/WhyChooseUs/WhyChooseUs";
import Tours from "../../components/HomePage/ExploreAbout/Tour";
import HitButtonSection from "../../components/HomePage/HitButtonSection/HitBUttonSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExplorePackageSection />
      <Tours />
      <WhyChooseUs />
      <CuisineSection />
      <BlogSection />
      <HitButtonSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
