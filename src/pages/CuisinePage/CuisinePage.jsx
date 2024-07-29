import { useEffect, useRef } from "react";
import CuisineCards from "../../components/CuisinePage/CuisineCards";
import CustomTab from "../../components/CustomTab/CustomTab";
import CustomTabItem from "../../components/CustomTab/CustomTabItem";
import {
  RegionalCuisine,
  VegDelights,
  StreetFood,
  SweetAndDesserts,
  Beverages,
  TechniquesAndIngredients,
  FoodFestivals,
  PopularFood,
} from "../../Data/CuisineData/CuisineData";
import PopularDishes from "../../components/CuisinePage/PopularDishes";
import Cuisinehero from "../../components/CuisinePage/Cuisinehero";
import CuisineHeroAbout from "../../components/CuisinePage/CuisineHeroAbout";
import TraditionalTechniques from "../../components/CuisinePage/TraditionalTechniques";
import TechniquesCards from "../../components/CuisinePage/TechniquesCards";

const CuisinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroAboutRef = useRef(null);
  const techniquesRef = useRef(null);

  const scrollToAbout = () => {
    if (heroAboutRef.current) {
      window.scrollTo({
        top: heroAboutRef.current.offsetTop - 120,
        // behavior: "smooth",
      });
    }
  };

  const scrollToTechniques = () => {
    if (techniquesRef.current) {
      window.scrollTo({
        top: techniquesRef.current.offsetTop - 120,
        // behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Cuisinehero scrollToAbout={scrollToAbout} />
      <div className="max-w-7xl mx-4 xl:mx-auto">
        <div className="text-3xl my-5 ">
          Explore the Regional Foods of India
        </div>
        <CustomTab customWidth={true}>
          {RegionalCuisine.submenu_items.map((food, index) => (
            <CustomTabItem key={index} label={food.name}>
              <CuisineCards data={food.dishItems} />
            </CustomTabItem>
          ))}
        </CustomTab>

        <PopularDishes data={PopularFood} />

        <div className="text-3xl mt-10">Vegetarian Delights from India</div>
        <CuisineCards data={VegDelights.dishItems} />
        <div className="text-3xl my-5 ">
          Venture Through India's Irresistible Street Food
        </div>
        <CuisineCards data={StreetFood.dishItems} />

        <CuisineHeroAbout
          ref={heroAboutRef}
          scrollToTechniques={scrollToTechniques}
        />

        <div className="text-3xl my-5 ">
          Delightful Sweets & Desserts of India
        </div>
        <CuisineCards data={SweetAndDesserts.dishItems} />
        <div className="text-3xl my-5 ">
          Quench Your Thirst with India's Finest Beverages
        </div>
        <CuisineCards data={Beverages.dishItems} />

        <TraditionalTechniques ref={techniquesRef} />
        <TechniquesCards data={TechniquesAndIngredients} />

        <div className="text-3xl my-10 ">
          Traditional Dishes for Every Indian Celebration
        </div>
        <CuisineCards data={FoodFestivals.dishItems} />
      </div>
    </>
  );
};

export default CuisinePage;
