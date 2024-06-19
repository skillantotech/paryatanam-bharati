const Tour = () => {
  return (
    <div className="my-20 max-w-7xl mx-4 xl:mx-auto">
      <div className="flex pl-32 pr-28 pt-6">
        <div className="font-bold text-3xl">
          <h1 className="my-4">
            Explore India's Rich Heritage, Festivals,and Arts in Vibrant Colors
          </h1>
        </div>

        <div className="">
          <div className="">
            <p className="p-5">
              Immerse yourself in the captivating world of Indian art, culture,
              and traditions. Discover the vibrant festivals, exquisite
              craftsmanship, and mesmerizing performances that make India truly
              unique.
            </p>
          </div>
          <div className=" flex">
            <div className="p-3">
              <img
                className="size-16"
                src="https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h2 className="font-bold p-1">Heritage</h2>
              <p className="">
                Uncover the diverse cultural heritage of India through its
                ancient monuments. architecture, and traditions.
              </p>
            </div>
            <div className="p-3">
              <img
                className="size-16"
                src="https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h2 className="font-bold p-1">Festivals</h2>
              <p className="">
                Experience the joy and vibrancy of India's colorful festivals
                that celebrate its rich cultural tapestry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <img
          className="size-10/12 h-96 mx-auto"
          src="https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};
export default Tour;
