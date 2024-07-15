import HeritageImage from "../../../assets/images/Tour-image/pexels-photo-2121549.jpg";
import CultureImage from "../../../assets/images/Tour-image/pexels-photo-8325306.jpg";
import LargeImage from "../../../assets/images/Tour-image/pexels-bhavitya-3126568.jpg";

const Tour = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mt-10">
      <div className=" md:flex flex-row">
        <div className="font-bold md:text-4xl text-3xl md:pl-0 pb-5 pl-4 mx-auto">
          <h1 className="">
            Explore India's Rich Heritage, Festivals,and Arts in Vibrant Colors
          </h1>
        </div>

        <div className="">
          <div className="">
            <p className="font-normal ml-4">
              Immerse yourself in the captivating world of Indian art, culture,
              and traditions. Discover the vibrant festivals, exquisite
              craftsmanship, and mesmerizing performances that make India truly
              unique.
            </p>
          </div>
          <div className=" flex ">
            <div className="p-4">
              <img
                className="size-16 object-cover"
                src={HeritageImage}
                alt="HeritageImage"
              />
              <h2 className="font-bold md:text-lg text-base pt-2">Heritage</h2>
              <p className="font-normal pt-2">
                Uncover the diverse cultural heritage of India through its
                ancient monuments. architecture, and traditions.
              </p>
            </div>
            <div className="p-4">
              <img
                className="size-16 object-cover"
                src={CultureImage}
                alt="uniqueImage"
              />
              <h2 className="font-bold md:text-lg text-base pt-2">Festivals</h2>
              <p className="font-normal pt-1">
                Experience the joy and vibrancy of India's colorful festivals
                that celebrate its rich cultural tapestry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 w-auto h-screen">
        <img
          className="object-cover w-full h-full rounded"
          src={LargeImage}
          alt="LargeImage"
        />
      </div>
    </div>
  );
};
export default Tour;
