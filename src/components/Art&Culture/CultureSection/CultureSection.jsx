// src/CultureSection.js
import React from 'react';

const cultureData = [
  { title: 'Dance', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Fairs & Festivals', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Archaeology', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Music', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Handicrafts', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Literature', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Monuments', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Heritage', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Painting', imgSrc: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const CultureSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-4">Colour of Culture</h2>
      <p className="text-center mb-8">From splendid paintings to beautiful wood crafts and textiles, India resounds with a rich and unique heritage.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cultureData.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.imgSrc} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 text-center py-2 text-black font-semibold rounded-b-lg">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureSection;
