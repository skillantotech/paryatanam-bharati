import React from "react";

const TraditionalTechniques = React.forwardRef((props, ref) =>(
    <div className="max-w-7xl xl:mx-auto my-10">
      {/* <div className=" flex flex-col gap-10 lg:flex-row bg-red-300 lg:max-h-96 overflow-hidden">
        <div className="justify-center md:justify-end  lg:w-1/2 bg-red-700">
          <img
            className=" object-cover w-full aspect-[16/16] lg:aspect-[1/1] rounded"
            src="https://images.pexels.com/photos/12392831/pexels-photo-12392831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:w-1/2  ">
          <div className="py-4">
            <h2 className="text-3xl lg:text-4xl  text-blue-600 font-semibold ">
              Traditional Cooking Techniques
            </h2>
            <h3 className="text-justify py-4 leading-6 ">
              Indian cooking is renowned for its diverse flavors and vibrant
              dishes, achieved through fundamental techniques. These include
              tempering (tadka), where whole spices are fried in hot oil to
              release their aroma; sautéing (bhunao), involving the cooking of
              onions, tomatoes, and spices to form a rich base; and slow-cooking
              (dum), which allows flavors to meld over low heat. Additionally,
              marinating proteins in yogurt and spices enhances tenderness and
              taste. Baking (tandoor) and steaming are also integral, while
              grinding spices and blending pastes ensure a harmonious balance of
              flavors. These techniques collectively create the distinctive,
              aromatic essence of Indian cuisine.
            </h3>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col gap-10 lg:flex-row justify-center lg:justify-between">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/12392831/pexels-photo-12392831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Placeholder"
            className="object-cover w-full h-full aspect-[1/1] sm:aspect-[8/6]"
            ref={ref}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left ">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
            Traditional Cooking Techniques of India
          </h2>
          <p className="text-lg leading-relaxed">
            Traditional Indian cooking techniques are rich and diverse,
            reflecting the country's vast cultural heritage. Tandoori cooking
            involves using a clay oven called a tandoor to cook meats and breads
            at high temperatures, imparting a unique smoky flavor. Dum cooking
            is a slow-cooking method where ingredients are sealed in a pot,
            allowing them to cook in their own steam and juices. Bhuna refers to
            a technique where spices are fried in oil to release their flavors
            before adding other ingredients. Another method is tempering or
            tadka, where spices are briefly fried in hot oil or ghee and then
            added to a dish to enhance its flavor and aroma. These techniques
            contribute to the distinctive and complex flavors of Indian cuisine.
          </p>
        </div>
      </div>
      {/* <div className="justify-center md:justify-end my-5">
        <img
          className="lg:h-full w-full aspect-[10/9] lg:aspect-[16/18] rounded"
          src="https://images.pexels.com/photos/7353379/pexels-photo-7353379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div> */}
      {/* Cards */}
      
    </div>
  ))

export default TraditionalTechniques;
