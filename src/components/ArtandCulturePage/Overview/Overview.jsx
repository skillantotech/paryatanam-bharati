import { useState } from "react";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto lg:mx-auto p-4 mt-4">
      <p className="text-lg text-gray-700">
        India is a land of diverse cultures, languages, and traditions, each
        region boasting its unique heritage and artistic expression. The
        country's art and culture reflect its historical richness and the myriad
        influences it has absorbed over millennia.
        <span
          className={`inline-block overflow-hidden transition-max-height duration-500 ${
            isExpanded ? "max-h-80" : "max-h-0"
          }`}
        >
          India's visual arts include a wide range of forms such as painting,
          sculpture, and textiles. Ancient cave paintings at Ajanta and Ellora,
          intricate stone carvings in Khajuraho, and Mughal miniatures
          demonstrate the depth and variety of Indian artistry. Traditional
          forms like Madhubani, Warli, and Pattachitra continue to thrive,
          preserving the country's folk heritage. Contemporary Indian artists
          blend traditional themes with modern techniques, making significant
          contributions to global art. Music and dance are integral to Indian
          culture, with classical forms like Hindustani and Carnatic music, and
          dance styles such as Bharatanatyam, Kathak, Odissi, and Kathakali,
          which have been perfected over centuries. These art forms are
          characterized by intricate rhythms, expressive gestures, and rich
          storytelling, often rooted in mythology and history. Bollywood music
          and dance also play a crucial role in modern Indian culture,
          influencing both domestic and international entertainment industries.
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
