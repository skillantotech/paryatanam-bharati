import React from "react";

const HeroAbout = React.forwardRef((props, ref) => (
  <>
    <div className="max-w-7xl mx-4 xl:mx-auto place-items-center my-10 ">
      <div className=" flex flex-col sm:gap-10 lg:flex-row">
        <div className="justify-center md:justify-end ">
          <img
            ref={ref}
            className="lg:h-full w-full aspect-[10/9] lg:aspect-[16/18] rounded"
            src="https://images.pexels.com/photos/17004229/pexels-photo-17004229/free-photo-of-boats-on-the-shore-of-the-nainital-lake-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:w-3/5  ">
          <div className="py-4">
            <h2 className="text-4xl  text-blue-600 font-semibold ">
              About Pilgrimage Tours in India
            </h2>
            <h3 className="text-justify py-4 leading-6 ">
              India boasts picture-perfect hill stations with stunning views
              from the Himalayas and Nilgiris. Our tour packages offer dream
              vacations at beautiful and peaceful places like Nainital, Shimla,
              Mussoorie, and Manali. Experience Jammu & Kashmir's beauty with
              houseboat stays in Srinagar and skiing in Gulmarg. In Himachal
              Pradesh, enjoy trekking, paragliding, and mountain biking in
              Shimla and Manali. Uttarakhand offers charming hill stations like
              Mussoorie and Nainital, plus adventure sports and religious
              journeys to places like Badrinath.
              <br />
              <br />
              Sikkim features Kanchenjunga and hill stations perfect for family
              vacations and honeymoons. In the south, visit Kerala's Munnar,
              Tamil Nadu's Ooty, and Karnataka's Coorg, known for their tea
              plantations and lakes. Rajasthan's Mount Abu and Gujarat's
              Saputara are ideal summer destinations, while West Bengal's
              Darjeeling and Kurseong are favorite hill station spots.
              <br />
              <br />
              Tour My India guarantees the best hill station vacation with
              packages tailored to your preferences and top-notch services.
              Enjoy a variety of destinations, activities, and accommodations
              designed to make your travel experience unforgettable. Whether
              you're seeking relaxation, adventure, or cultural experiences, our
              packages provide the perfect holiday solution. Embark on a journey
              with us and discover the breathtaking beauty of India's hill
              stations.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </>
));

export default HeroAbout;
