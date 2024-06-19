// import Packages from "./../../assets/pexels-godson-bright-352845-962464.jpg";
import packageImage from "../../../assets/images/1.webp";

const ExplorePackageSection = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-20">
      <div className="h-80 w-1/2 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600"
          // src={packageImage}
          alt="Placeholder"
          className="object-cover h-full max-w-full"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center px-8 relative">
        <h1 className="text-3xl font-bold mb-4">Custom Travel Packages</h1>
        {/* <h2 className="text-xl font-semibold mb-4">Subheading</h2> */}
        <p className="text-base">
          Discover the world with our custom travel packages, guided tours and
          exclusive experiences. Whether you&apos;re looking for a relaxing
          beach gateaway, an adventurous trek through the mountains, or a
          cultural immersion in a vibrant city, we have perfect itinerary for
          you.
        </p>
        <div className="mt-6">
          <button className="border border-black font-semibold px-4 py-2 mr-4">
            Explore
          </button>
          <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePackageSection;
