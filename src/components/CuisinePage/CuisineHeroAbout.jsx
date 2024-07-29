import React from "react";

const CuisineHeroAbout = React.forwardRef(({scrollToTechniques}, ref) => (
  <div className="max-w-7xl xl:mx-auto place-items-center my-10">
    <div className=" flex flex-col gap-10 lg:flex-row">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/12392831/pexels-photo-12392831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Placeholder"
          ref={ref}
          className="object-cover w-full h-full aspect-[1/1] sm:aspect-[5/4]"
        />
      </div>
      <div className="flex lg:w-1/2 ">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-3xl lg:text-4xl  text-blue-600 font-semibold ">
            Spice Up Your Life with Authentic Indian Cuisine
          </h2>
          <h3 className="text-justify leading-6 ">
            Embark on a flavorful journey through the vibrant world of Indian
            cuisine, where every dish tells a story of rich tradition and
            diverse culture. From the spicy curries of the south to the aromatic
            biryanis of the north, Indian food is a celebration of bold flavors
            and time-honored recipes. Savor the warmth of freshly baked naan,
            the richness of creamy butter chicken, and the zest of tangy
            chutneys.
            <br />
            <br />
            Delve into the heart of Indian cuisine, where every meal is a
            vibrant tapestry of flavors, colors, and aromas. Celebrating
            diversity from fiery southern spices to delicate northern sweets,
            Indian food offers tangy chutneys, warm freshly baked bread, and
            rich, complex curries. Each dish, crafted with time-honored spices,
            promises a culinary adventure that excites the palate and awakens
            the senses.
            <br />
            <br />
            Explore the diverse and flavorful world of Indian cuisine, offering
            a remarkable array of dishes. From aromatic biryanis and curries to
            the comforting dosas and rotis, Indian food celebrates taste and
            culture. Each dish masterfully blends spices like cumin, coriander,
            and cardamom, creating a rich and unforgettable experience.
          </h3>
          <button
            type="button"
            className="my-2 text-xl p-2 px-4 text text-white bg-blue-600"
            onClick={scrollToTechniques}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
));

export default CuisineHeroAbout;
