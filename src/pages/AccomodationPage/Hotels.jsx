import React, { useState, useEffect, useRef } from "react";

const cities = [
  { id: 1, city: "Mumbai", state: "Maharashtra", country: "India" },
  { id: 2, city: "Delhi", state: "Delhi", country: "India" },
  { id: 3, city: "Bengaluru", state: "Karnataka", country: "India" },
  { id: 4, city: "Kolkata", state: "West Bengal", country: "India" },
  { id: 5, city: "Chennai", state: "Tamil Nadu", country: "India" },
  { id: 6, city: "Hyderabad", state: "Telangana", country: "India" },
  { id: 7, city: "Pune", state: "Maharashtra", country: "India" },
  { id: 8, city: "Jaipur", state: "Rajasthan", country: "India" },
  { id: 9, city: "Ahmedabad", state: "Gujarat", country: "India" },
  { id: 10, city: "Lucknow", state: "Uttar Pradesh", country: "India" },
  { id: 11, city: "Chandigarh", state: "Chandigarh", country: "India" },
  { id: 12, city: "Bhopal", state: "Madhya Pradesh", country: "India" },
];

const Hotels = () => {
  const [location, setLocation] = useState("");
  //   const [to, setTo] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  //   const [toSuggestions, setToSuggestions] = useState([]);
  //   const [cityID, setCityID] = useState(1);

  const locationRef = useRef(null);
  //   const toRef = useRef(null);

  const handleFromChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setLocationSuggestions(
      cities.filter(
        (city) =>
          city.city.toLowerCase().includes(value.toLowerCase()) ||
          city.state.toLowerCase().includes(value.toLowerCase()) ||
          city.country.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  //   const handleToChange = (e) => {
  //     const value = e.target.value;
  //     setTo(value);
  //     setToSuggestions(
  //       cities.filter(
  //         (city) =>
  //           city.city.toLowerCase().includes(value.toLowerCase()) ||
  //           city.state.toLowerCase().includes(value.toLowerCase()) ||
  //           city.country.toLowerCase().includes(value.toLowerCase())
  //       )
  //     );
  //   };

  const selectLocationSuggestion = (city) => {
    setLocation(city.city);
    setLocationSuggestions([]);
  };

  //   const selectToSuggestion = (city) => {
  //     setTo(city.city);
  //     setToSuggestions([]);
  //   };

  const handleClickOutside = (event) => {
    if (locationRef.current && !locationRef.current.contains(event.target)) {
      setLocationSuggestions([]);
    }
    // if (toRef.current && !toRef.current.contains(event.target)) {
    //   setToSuggestions([]);
    // }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      className=" py-20 bg-cover bg-[0px_-280px] flex items-center justify-center md:h-[65vh]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/24596462/pexels-photo-24596462/free-photo-of-illuminated-street-in-delhi-at-night.jpeg)",
      }}
    >
      <div className="max-w-7xl mx-4 xl:mx-auto flex flex-col gap-10 py-10 px-6 md:p-28 rounded-lg bg-black/30 bg-opacity-5 shadow-lg backdrop-blur-sm border border-white border-opacity-20 ">
        <h2 className="flex flex-col gap-2 text-3xl md:text-5xl font-bold text-center text-white">
          Find the Best Hotels
          <span className="text-lg sm:text-xl font-normal text-center text-gray-100">
            Book your ideal hotel stay with us for a memorable and comfortable
            experience.
          </span>
        </h2>
        <form className="space-y-4 lg:space-y-0 flex flex-col lg:flex-row gap-5 items-center justify-center ">
          {/* <div className="flex flex-col gap-4 sm:gap-10 sm:flex-row justify-center w-full items-center "> */}
          <div
            className="relative w-full  border border-gray-400 rounded-lg sm:py-1 text-white bg-gray-400/20 "
            ref={locationRef}
          >
            <label
              htmlFor="location"
              className="block text-md font-medium px-4 pt-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              autocomplete="off"
              onChange={handleFromChange}
              className="relative block w-full p-4 text-4xl bg-transparent text-white rounded-md shadow-sm focus:outline-none  "
            />
            {locationSuggestions.length > 0 && (
              <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {locationSuggestions.map((city) => (
                  <li
                    key={city.city}
                    onClick={() => {
                      selectLocationSuggestion(city);
                      // setCityID(city.id);
                    }}
                    className="cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-indigo-600 hover:text-white"
                  >
                    {city.city}, {city.state}, {city.country}
                  </li>
                ))}
              </ul>
            )}

            {/* <span className="absolute bottom-2 left-4 ">{cities[cityID-1].state}, {cities[cityID-1].country} </span>  */}
          </div>
          {/* </div> */}

          <div className=" flex flex-col gap-8 sm:gap-4 lg:gap-2 w-full justify-center lg:self-start">
            <div className="flex flex-col w-full sm:items-center sm:justify-center sm:flex-row self-start gap-2">
              <div className="md:w-40">
                <label
                  htmlFor="date"
                  className="block text-md font-medium text-white"
                >
                  Check-In
                </label>
                <select
                  id="date"
                  name="date"
                  className=" block w-full  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
                >
                  <option>Select Date</option>
                  <option>2024-08-01</option>
                  <option>2024-08-02</option>
                  <option>2024-08-03</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="md:w-40">
                <label
                  htmlFor="date"
                  className="block text-md font-medium text-white"
                >
                  Check-Out
                </label>
                <select
                  id="date"
                  name="date"
                  className=" block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
                >
                  <option>Select Date</option>
                  <option>2024-08-01</option>
                  <option>2024-08-02</option>
                  <option>2024-08-03</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="md:w-40">
                <label
                  htmlFor="date"
                  className="block text-md font-medium text-white"
                >
                  Guests
                </label>
                <select
                  id="date"
                  name="date"
                  className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm"
                >
                  <option>Select Persons</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>Custom</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="text-center sm:self-center lg:self-start">
              <button
                type="submit"
                className="sm:w-fit w-full flex items-center justify-center py-1 px-6 bg-blue-600 text-lg text-white font-semibold rounded-md shadow-sm hover:bg-blue-500 focus:outline-none "
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hotels;
