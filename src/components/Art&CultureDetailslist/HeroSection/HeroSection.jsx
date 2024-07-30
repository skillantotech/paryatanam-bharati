import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('https://i.pinimg.com/564x/c0/59/df/c059dfc599da353fd4605dc4baeb748c.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative  flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in">Dance Form</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md animate-fade-in delay-2s">Discover the rich and diverse heritage of classical dances, vibrant festivals, traditional music, and exquisite handicrafts.</p>
      
      </div>
    </div>
  );
};

export default HeroSection;
