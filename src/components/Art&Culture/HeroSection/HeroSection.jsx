import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative bg-center bg-cover h-[calc(100vh-120px)] md:h-[calc(100vh-96px)]"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/318238/pexels-photo-318238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Explore the Art & Culture of India
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
          Discover the rich and diverse heritage of classical dances, vibrant festivals, traditional music, and exquisite handicrafts.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

