import { VscArrowRight } from "react-icons/vsc";

const CuisineSection = () => {
  return (
    <div className="lg:flex max-w-7xl mx-4 xl:mx-auto">
      <div className="p-12">
        <h4 className="font-medium uppercase tracking-wider">Flavors of India</h4>
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
            <img
              className="h-14 "
              src="https://static.vecteezy.com/system/resources/previews/020/975/671/original/zomato-logo-zomato-icon-transparent-free-png.png"
              alt=""
            />
            <h2 className="font-bold text-2xl">Zomato</h2>
            <p className="pt-3">
              Explore the vibrant Flavors and Unique ingredients that make
              Indian Cuisine so extraordinary
            </p>
          </div>
          <div>
            <img
              className="h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHegQvy1HVVf4ifHvTMXh6E0WFDuGuZquolvlS6ghsxG7oGUQrgCrgrKQ2IoNRMV_tGwc&usqp=CAU"
              alt=""
            />
            <h2 className="font-bold text-2xl">Swiggy</h2>
            <p className="pt-3">
              Embark on unforgettable culinary tours that will immerse you in
              India's rich food cultures
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <button className="mt-5  border-2 border-slate-900 p-1 hover:bg-black hover:text-white rounded-sm">
            Learn More
          </button>
          <button className="ml-10 mt-5 group flex items-center">
            Sign Up
            <div className="ps-2 group-hover:translate-x-3 transition-all duration-300 ease-out">
              <VscArrowRight />
            </div>
          </button>
        </div>
      </div>

      
      <img
        className="object-cover "
        src="https://static.toiimg.com/thumb/74596320.cms?width=600&resizemode=4"
        alt="img"
      />
    </div>
  );
};
export default CuisineSection;
