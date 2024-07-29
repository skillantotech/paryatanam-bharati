import HeritageImage from "../../../assets/images/Tour-image/pexels-photo-2121549.jpg";
import CultureImage from "../../../assets/images/Tour-image/pexels-photo-8325306.jpg";
import LargeImage from "../../../assets/images/Tour-image/pexels-bhavitya-3126568.jpg";

const Tour = () => {
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mt-10">
      <div className=" flex flex-col lg:flex-row gap-4">
        <div className="font-bold md:text-4xl text-3xl mx-auto">
          <h1 className="">
            Explore India's Rich Heritage, Festivals,and Arts in Vibrant Colors
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <div className="">
            <p className="font-normal ">
              Immerse yourself in the captivating world of Indian art, culture,
              and traditions. Discover the vibrant festivals, exquisite
              craftsmanship, and mesmerizing performances that make India truly
              unique.
            </p>
          </div>
          <div className=" flex gap-4">
            <div className="">
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
            <div className="">
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
      <div className="pt-6 w-auto md:h-screen">
        <img
          className="object-cover w-full h-full rounded aspect-[1/1] md:aspect-auto"
          src={LargeImage}
          alt="LargeImage"
        />
      </div>
    </div>
  );
};
export default Tour;
