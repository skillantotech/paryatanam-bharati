import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const CuisineSection = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-4 xl:mx-auto gap-4">
      <div className="lg:py-8">
        <h4 className="font-medium uppercase tracking-wider">
          Flavors of India
        </h4>
        <h2 className="pb-5 pt-3 text-3xl sm:text-4xl font-bold">
          Explore India's diverse cuisine and rich culinary heritage
        </h2>
        <p className="">
          Experience the rich and diverse culinary traditions of india through
          our curated collectiobn of mouth-watering dishes.regional
          specialistes. and immersive culinary tours.From the spicy curries of
          the North to the aromatic biryanis of the south,embark on a
          gastronomic journy that will tantalize your taste buds and leave you
          craving for more.
        </p>
        <div className="flex pt-6 gap-3">
          <div>
            <div className="logoContainer h-16 w-16 -mx-2 -my-1">
              <img
                className="h-full w-full object-center rounded"
                src="https://static.vecteezy.com/system/resources/previews/020/975/671/original/zomato-logo-zomato-icon-transparent-free-png.png"
                alt=""
              />
            </div>
            <h2 className="font-bold text-2xl text-red-500">Zomato</h2>
            <p className="pt-3">
              Explore the vibrant Flavors and Unique ingredients that make
              Indian Cuisine so extraordinary
            </p>
          </div>
          <div>
            <div className="logoContainer h-12 w-12 mb-1">
              <img
                className="h-full w-full object-cover rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHegQvy1HVVf4ifHvTMXh6E0WFDuGuZquolvlS6ghsxG7oGUQrgCrgrKQ2IoNRMV_tGwc&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="font-bold text-2xl text-orange-400">Swiggy</h2>
            <p className="pt-3">
              Embark on unforgettable culinary tours that will immerse you in
              India's rich food cultures
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5 mt-6">
          {/* <button className="border border-black font-semibold px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 rounded"> */}
          <Link
            to={"/sign-up"}
            className="font-semibold px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 rounded"
          >
            Sign Up
          </Link>
          <button className="group flex items-center font-semibold">
            Learn More
            <div className="ps-2 group-hover:translate-x-2 transition-all duration-300 ease-out">
              <VscArrowRight />
            </div>
          </button>
        </div>
      </div>

      <img
        className="object-cover rounded"
        src="https://static.toiimg.com/thumb/74596320.cms?width=600&resizemode=4"
        alt="img"
      />
    </div>
  );
};
export default CuisineSection;
