import { useState,useRef, useEffect } from "react";

const Overview = () => {
  const destinations = [
    {
      name: "Jaipur",
      description:
        "The capital city Jaipur has been recognized as a UNESCO World Heritage Site. Dotted with numerous heritage sites, the Pink City is an unmissable destination.",
    },
    {
      name: "Udaipur",
      description:
        "Dubbed the City of Lakes, Udaipur is adorned with many man-made lakes, palaces, and the Aravalli Hills which make it a popular tourist destination in Rajasthan.",
    },
    {
      name: "Jodhpur",
      description:
        "Home to the impressive Mehrangarh Fort and Umaid Bhavan, Jodhpur, the second-largest city in Rajasthan is a history lover’s paradise.",
    },
    {
      name: "Jaisalmer",
      description:
        "The Golden City, Jaisalmer is flanked by the Thar Desert and adorned with a living fort. Reflecting the rich history of Rajasthan, Jaisalmer is a land of experiences you cannot forget.",
    },
    {
      name: "Ranthambore National Park",
      description:
        "One of the major tiger reserves in India, Ranthambore National Park boasts rich wildlife, historical monuments, and an enthralling wildlife safari experience.",
    },
    {
      name: "Pushkar",
      description:
        "One of the oldest cities in India, Pushkar is a religious destination which also has a hippie vibe. Its 52 ghats and one-of-its-kind Brahma Temple attract many from across the world.",
    },
    {
      name: "Bikaner",
      description:
        "Displaying the opulence of Rajasthan’s culture and history, Bikaner is popular as a world’s largest camel research and breeding farms and is home to the unique rat temple, Karni Mata.",
    },
    {
      name: "Ajmer",
      description:
        "Famed as an important Muslim pilgrimage, Ajmer is a sacred destination in Rajasthan that is also known for historical opulence.",
    },
    {
      name: "Chittorgarh",
      description:
        "The largest fort not only in Rajasthan but in India, Chittorgarh is known for its architectural brilliance and different periods of history that it has been the witness of.",
    },
    {
      name: "Kumbhalgarh",
      description:
        "Boasting one of the longest walls in the world, Kumbhalgarh is the second-largest fort in India. This impressive fort is not to be missed witnessing in Rajasthan.",
    },
  ];

  const [visibleDestinations, setVisibleDestinations] = useState(3);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight + "px");
    }
  }, [visibleDestinations]);

  const handleLoadMore = () => {
    setVisibleDestinations(destinations.length);
  };

  const handleLoadLess = () => {
    setVisibleDestinations(3);
  };
  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mt-8 mb-12">
      <div className="prose lg:prose-xl">
        <h2 className="text-3xl font-bold mb-4">About Rajasthan Tourism</h2>
        <p className="mb-6">
          Rajasthan is a state of vibrant folk dance and music, gigantic forts
          and palaces, spicy food, colourful and large turbans, extensive golden
          sand desert, camels and rich handicraft. It is therefore, an
          incredible place to visit in India for enjoying unforgettable
          holidays. Sprawling in an area of 342239 sq km, Rajasthan is perfect
          for history buffs, culture aficionados, adventure lovers, wildlife
          enthusiasts, family vacations, honeymoon, and more.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Architectural Splendour: Forts, Palaces & Havelis!
        </h3>

        <p className="mb-6">
          The major tourist attractions of Rajasthan are its havelis, palaces
          and forts that add to the experience of exploring one of the
          historically wealthy states in India. Some of the most famous and most
          visited forts in Rajasthan are Chittorgarh, Mehrangarh, Jaisalmer,
          Jaigarh and Junagadh Forts. Of these, the Mehrangarh Fort in Jodhpur
          is spread over 5 kilometers and stands on a hill almost 125 kilometers
          high. Chittorgarh Fort is also a must-visit tourist attraction, as
          it’s the largest fort in Asia. It is spread over an area of 700 acres,
          extending to 3 km in length and 13 km in peripheral length. The
          exquisite architecture isn’t only confined to the palaces and forts as
          Rajasthan also boasts impressive Hindu & Jain temples like Dilwara
          Jain Temples and Eklingji Temple.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          A Rich Melange of Dances, Songs, Rides & Colors!
        </h3>

        <p className="mb-6">
          For culture aficionados, there are a number of fairs and festivals in
          Rajasthan to witness. The flamboyant manner in which even the cattle
          fairs take place in Pushkar and Nagaur is truly something to behold.
          Some of the most famous tourism festivals that showcase the rich
          traditions, customs, folk dance and music of the state are the Desert
          Festival, Bikaner Camel Festival, Nagaur Fair, Pushkar Fair, Elephant
          Festival, Mewar Festival, Mount Abu Winter Festival, Gangaur Festival
          and Teej.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Rajasthan Also Boasts a Rich Wildlife!
        </h3>

        <p className="mb-6">
          Rajasthan, even though the hot and arid place, is rich in wildlife
          tourism. It offers several opportunities for tiger sighting and
          birdwatching. Some of the famous wildlife sanctuaries and national
          parks of the state are Ranthambore National Park, Sariska National
          Park, Keoladeo and Mukundra Hills National Park. It is blessed with a
          rich variety of vegetation and animal & bird species. To spot the
          Royal Bengal Tigers, Ranthambore National Park and Sariska National
          Park are the most famous wildlife destinations in Rajasthan.
        </p>

        <p className="mb-6">
          Those who love birdwatching should visit Keoladeo National Park
          (Bharatpur Bird Sanctuary), a UNESCO World Heritage Site, as it is
          home to at least 230 species of birds. Home to indigenous water birds
          and migratory water birds, specifically the Siberian Crane, the
          Bharatpur Sanctuary also boasts many species of mammals like Sambar,
          Chital, Nilgai and Boar. It is a major tourist spot for most
          ornithologists during the hibernal season. Apart from these, Rajasthan
          is home to a large number of leopards, blackbuck, great Indian spotted
          eagle, and marsh crocodiles.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Go Shopping : From Jewellery to Paintings!
        </h3>

        <p className="mb-6">
          An indispensable part of the culture of Rajasthan is the handicraft
          skills, shopping for which is an experience to have. The state is
          famous for its jewellery pieces, and is one of the largest centers for
          hand cut gems in the world. Gold and silver jewellery is extremely
          famous, along with Kundan and Meenakari styles of ornaments. The gold
          work on glass, called Thewa is also quite a popular thing to buy in
          Rajasthan.
        </p>

        <p className="mb-6">
          Another shopping worthy article in Rajasthan are its miniature
          paintings that have a Mughal influence to it. These paintings have
          intricate detailing and come in different styles like Mewar, Bundi,
          Kota, Marwar, Bikaner, Jaipur and Kishangarh. An ancient art of scroll
          painting called Phad also makes for one of the best things to take
          back home from Rajasthan. Pichwais are another form of paintings, a
          little different from Phad; but equally attractive.
        </p>

        <p className="mb-6">
          Apart from home decor in the form of paintings, Rajasthan offers an
          opportunity to buy some authentic and exquisite leather items, amongst
          which Mojari/Jutti/Shoes are the most popular things to buy. One can
          get the best Mojari from Jaipur, Jodhpur, Barmer and Jaisalmer along
          with musical instruments made out of leather. From Bikaner one can
          purchase lamp shades, shields, vases made out of camel hide.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Daal Baati Churma to Laal Maas : Savour the Rich Cuisine of Rajasthan!
        </h3>

        <p className="mb-6">
          Influenced with the parched region of Rajasthan, extreme climatic
          conditions and limited availability of water and vegetation, the
          Rajasthani Cuisine has evolved out of the unique cooking style and
          pugnacious lifestyle of its natives. From the signature dish of the
          state; Dal Bati Churma to the popular street snack; mirchi ke pakore,
          from the generous use of spice and ghee to the prominent use of a
          variety of lentils and legumes, Rajasthani food is a fine treat for
          which the tourists travel even thousand miles.
        </p>

        <p className="mb-6">
          Starting from different kinds of breads like Batis, Missi roti, and
          Jowar, Bajra and Makke ki roti, to go with exceptionally tasty curries
          like Gatte ki Sabzi, Papad ki Sabzi and Kadhi Pakora. The pungent
          tidbits and accompaniments like Moong Dal and Pyaaz ki Kachori,
          Bikaneri Bhujia, Bajre ka khichda, Kher Sangri, and Lehsun ki Chutney,
          and the wind-up digestive Butter Milk elaborates the menu even more.
          And not to forget the sweet wonders like Churma, Lapsi, Malpua,
          Ghewar, Alwar ka Mawa and the long-lasting Gond ke Laddoo. Though the
          region is predominantly vegetarian, the influence of Rajputs
          non-vegetarian food habit can be seen in the cuisine with the presence
          of delicacies such as Laal Maas, Jungle Maas, Khad Khargosh and Safed
          Maas, that in a way completes the menu.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Luxury Holidays and Royal Hospitality!
        </h3>

        <p className="mb-6">
          For luxury holidays, Rajasthan tourism has a decent number of heritage
          hotels that along with offering incredible hospitality to all its
          guests also cater to the fantasies of honeymoon couples. There are
          several ways that you can experience both luxury and royal hospitality
          in Rajasthan. One of these is taking a ride on the Royal Rajasthan on
          Wheels Train where you can sink into a relaxing massage session;
          sample spicy Rajasthani cuisine in a restaurant and bar-cum-lounge;
          relaxing stay in twin-bedded chambers with attached bathrooms and
          pampering session in the well-furnished salon, while enjoying the
          pretty view of the desert rolling by.
        </p>

        <p className="mb-6">
          You can also stay at the heritage hotels, which were once palaces of
          the princes and maharajas but were later converted into heritage
          hotels. The major percentage of hotels are adorned with exotic murals;
          original artifacts; king-sized beds, manicured gardens; mirrored bar;
          sunlit corridors and most modern style with the convenience that were
          once the properties of the reigning monarchs. Some of the most famous
          heritage hotels in Rajasthan are Leela Palace, Taj Lake Palace, Umaid
          Bhawan and Jal Mahal Palace. The fabulous exteriors, spectacular
          interiors and hospitality normally reserved for royalty are some of
          the experiences in store for you at these heritage hotels. A stay in
          any of these hotels would transfer one to the world where everything
          is lavish, luxurious and larger than life.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          From Zip Lining to Zorbing, there are Several Options for Adventure
          Tourism Sports!
        </h3>

        <p className="mb-6">
          Rajasthan also offers numerous opportunities for enjoying several
          adventure tourism sports activities. Some of the adventure hotspots in
          the state are Jaipur, Pushkar, Bharatpur and Jaisalmer. In Bharatpur,
          you can enjoy different types of adventure activities like zip lining,
          quake walk and rope course.
        </p>

        <p className="mb-6">
          Jaipur attracts adventure enthusiasts with a number of adventure
          activities like zorbing, cycling and ATV bike ride. In Pushkar, you
          can enjoy hot air balloon rides, quad biking and camel safari. And of
          course, with Rajasthan being home to the great sand dunes of the Thar
          desert, you can enjoy camel rides, feel the thrill of sand dune
          bashing and biking. You can also enjoy parasailing and enjoy the views
          of the forts and desert from above.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Spirituality Abounds in the State of Rajasthan!
        </h3>

        <p className="mb-6">
          Rajasthan is also immersed in spirituality, with its numerous places
          of worship belonging to Hindus, Muslims and Jains. Some of the temples
          are famous throughout the country, like the Karni Mata Temple, where
          rats are treated like deities and offered food. Some of the most
          visited Hindu temples in the state are Brahma Temple, Deo Somnath
          Temple, Jagdish Temple, Kunj Bihari Temple and Kaila Devi Temple.
        </p>

        <p className="mb-6">
          There are several Muslim places of worship, and some of them are
          visited by both Hindus and Muslims alike. One of them is the Dargah
          Sharif or Ajmer Sharif. It is dedicated to Khwaja Moinuddin Chishti,
          who came to Ajmer from Persia in 1192. Hazrat Khwaja Moinuddin Hasan
          Chishti occupies a prominent place amongst the spiritual healers of
          the world. Constructed with white marble, it has 11 arches and a
          Persian inscription running through the full length of the building.
          The other one is Abdullah Pir Dargah Banswara.
        </p>

        <p className="mb-6">
          Rajasthan is also home to the most beautiful Jain temples in the
          world. Two of the most visited ones are Ranakpur Jain Temples and
          Dilwara Temple. The Jain temple of Ranakpur is situated in the heart
          of the Aravalli hills. The temple is a fine specimen of art and
          culture that makes it a treasured site of Rajasthan that is to be
          cherished. The construction of this temple was started in the year of
          1446 and was completed in the year 1496. It took fifty years for the
          completion of the temple.
        </p>

        <p className="mb-6">
          Dilwara Temple is one of the finest and architecturally renowned Jain
          temples in India. A large number of visitors and pilgrims visit this
          temple every day. Its extraordinary architecture is its major
          attraction. Intricate carvings on the marble stone and high-quality
          craftsmanship of the workers are clearly visible in every aspect of
          this temple, making it truly unique and distinct. Its opulent
          entranceway is truly stunning and spectacular. Other famous Jain
          Temples are Shri Mahavirji Jain Temple and Tijara Jain Temple.
        </p>

        <p className="mb-6">
          We at Tour My India want to help you explore this incredible land, and
          thus bring to you the best Rajasthan holiday packages at the best
          prices. With our travel deals you have the opportunity to discover
          Rajasthan the way you want.
        </p>
        <h3 className="text-2xl font-bold mb-2">Top 10 Most Visited Destinations in Rajasthan</h3>
        <div
          ref={contentRef}
          style={{
            transition: "height 0.5s ease-in-out",
            height: visibleDestinations < destinations.length ? "auto" : contentHeight,
            overflow: "hidden",
          }}
        >
          <ul className="space-y-6">
            {destinations.slice(0, visibleDestinations).map((destination, index) => (
              <li key={index}>
                <p>
                  <strong>{destination.name} :</strong> {destination.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {visibleDestinations < destinations.length ? (
          <button
            onClick={handleLoadMore}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded transition duration-300 ease-in-out"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={handleLoadLess}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded transition duration-300 ease-in-out"
          >
            Load Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Overview;