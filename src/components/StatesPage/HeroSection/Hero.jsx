import { useEffect, useState } from 'react';

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState('https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

  useEffect(() => {
    const images = [
      'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];
    let currentIndex = 0;

    const changeBackground = () => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    };

    const interval = setInterval(changeBackground, 5000); // Change interval to 5 seconds for better effect
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative bg-cover bg-center h-[60vh] bg-no-repeat transition-bg duration-1000 ease-in-out  "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute w-full h-full text-gray-200 bg-black/50 flex flex-col justify-center items-center">
        <h1 className="px-4 text-4xl sm:text-6xl lg:text-7xl font-bold z-[1] mx-auto text-center transform transition-opacity duration-1000 animate-fadeIn mb-3">
          Rajasthan <span className="text-orange-600 m-2">Tourism</span>
        </h1>
        <h3 className="px-4 text-sm sm:text-xl lg:text-2xl font-bold z-[1] mx-auto text-center transform transition-opacity duration-1000 animate-fadeIn">
          Discover Rajasthan's vibrant culture, majestic forts, and golden deserts.
        </h3>
      </div>
    </div>
  );
};

export default Hero;