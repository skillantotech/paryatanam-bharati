const WhyChooseUs = () => {
  return (
    <section
      id="features"
      className="relative block py-10 md:py-8 md:px-10 max-w-7xl mx-4 xl:mx-auto"
    >
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="my-3 flex items-center justify-center font-medium uppercase tracking-wider">
          Why choose us
        </span>
        <h2 className="block w-full bg-clip-text font-bold text-3xl sm:text-4xl">
          Your Satisfaction, Our Priority
        </h2>
        <p className="mx-auto my-4 w-full max-w-3xl bg-transparent text-center font-medium leading-relaxed tracking-wide ">
          At Paryatanam Bharati, your satisfaction is paramount. Our commitment
          to excellence ensures that every aspect of your trip exceeds
          expectations. From the moment you book until you return home, our team
          is dedicated to delivering an unparalleled travel experience.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl z-[1] grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 text-white">
        <div className="ChooseUsCards rounded-md h-[400px] p-8 text-center shadow relative">
          <div className="ChooseUsText absolute left-0 top-0 h-full">
            <h3 className="mt-6 text-2xl font-semibold">Seamless Experience</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
              Sit back, relax, and let us handle the details. From
              transportation arrangements to activity bookings, we take care of
              all the logistics so you can focus on making memories. Enjoy a
              hassle-free experience from start to finish.
            </p>
          </div>
        </div>
        <div className="ChooseUsCards2 rounded-md p-8 text-center shadow relative">
          <div className="ChooseUsText absolute left-0 top-0 h-full">
            <h3 className="mt-6 text-2xl font-semibold">Local Insights</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
              Experience destinations like a local with our insider insights.
              From hidden gems to off-the-beaten-path attractions, delve into
              each location&apos;s culture and heritage. Discover landmark stories
              for a richer travel experience.
            </p>
          </div>
        </div>
        <div className="ChooseUsCards3 rounded-md p-8 text-center shadow relative">
          <div className="ChooseUsText absolute left-0 top-0 h-full">
            <h3 className="mt-6 text-2xl font-semibold">
              Sustainability Commitment
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide">
              We are committed to responsible tourism, minimizing environmental
              impact, and supporting local communities to preserve destination
              beauty and authenticity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;