import React, { useState } from "react";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto lg:mx-auto p-4 mt-8">
      <p className="text-lg text-gray-700">
        Indian dance forms are a vibrant tapestry of cultural heritage, each
        with its unique style, history, and significance. Classical dances like
        Bharatanatyam, Kathak, Odissi, Kathakali, and Manipuri are steeped in
        tradition, often narrating ancient stories and spiritual themes through
        intricate movements, expressions, and music.
        <span
          className={`inline-block overflow-hidden transition-max-height duration-500 ${
            isExpanded ? "max-h-80" : "max-h-0"
          }`}
        >
          Bharatanatyam, from Tamil Nadu, is known for its grace and precision,
          while Kathak from North India tells stories with expressive gestures
          and swift spins. Folk dances like Bhangra, Garba, and Dandiya capture
          the joy and traditions of rural life, often performed during festivals
          and celebrations. Each dance form not only entertains but also
          preserves the rich cultural narratives of India, making them integral
          to the country's artistic legacy. Whether in temples, theaters, or
          village squares, Indian dances continue to enchant audiences worldwide
          with their beauty and depth.
        </span>
      </p>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="font-bold text-lg cursor-pointer group relative transition-all duration-500 ease-in-out"
        >
          {isExpanded ? "Read Less" : "Read More"}
          <div className="absolute left-0 bottom-0 h-[3px] bg-[#3B82F6] w-0 group-hover:w-full transition-all duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default Overview;
