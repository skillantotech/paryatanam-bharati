import { useState, useEffect, useRef } from "react";
import { CgArrowsExchange } from "react-icons/cg";
import HandpickedColletion from "../../components/TransportationPages/HandpickedCollection/HandpickedCollection";

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

const TransportAir = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  //   const [cityID, setCityID] = useState(1);
  //   const [specialFare, setSpecialFare] = useState("");

  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFrom(value);
    setFromSuggestions(
      cities.filter(
        (city) =>
          city.city.toLowerCase().includes(value.toLowerCase()) ||
          city.state.toLowerCase().includes(value.toLowerCase()) ||
          city.country.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);
    setToSuggestions(
      cities.filter(
        (city) =>
          city.city.toLowerCase().includes(value.toLowerCase()) ||
          city.state.toLowerCase().includes(value.toLowerCase()) ||
          city.country.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const selectFromSuggestion = (city) => {
    setFrom(city.city);
    setFromSuggestions([]);
    // setCityID(city.id);
  };

  const selectToSuggestion = (city) => {
    setTo(city.city);
    setToSuggestions([]);
  };

  const handleClickOutside = (event) => {
    if (fromRef.current && !fromRef.current.contains(event.target)) {
      setFromSuggestions([]);
    }
    if (toRef.current && !toRef.current.contains(event.target)) {
      setToSuggestions([]);
    }
  };

  const interChange = () => {
    if (from !== "" && to !== "") {
      setFrom(to);
      setTo(from);
    } else {
      alert("Please Select at least two Destinations!");
      setFrom(from);
      setTo(to);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <section
        className="py-20 bg-cover bg-center md:bg-top flex items-center justify-center md:h-[85vh]"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/plane-with-word-s-tail_910054-3196.jpg)",
        }}
      >
        <div className="max-w-7xl mx-4 xl:mx-auto flex flex-col gap-10 py-10 px-6 md:p-20 rounded-lg bg-black bg-opacity-5 shadow-lg backdrop-blur-sm border border-white border-opacity-20">
          <h2 className="flex flex-col gap-2 text-3xl md:text-5xl font-bold text-center text-white">
            Book Your Flight!
            <span className="text-xl md:text-xl font-normal text-center text-gray-100">
              Travel anywhere with discounts & offers from Paryatanam Bharati
            </span>
          </h2>
          <form className="space-y-4 flex flex-col gap-5 items-center">
            <div className="flex flex-col gap-4 md:gap-10 md:flex-row justify-center w-full items-center md:px-4">
              <div
                className="relative w-full border border-gray-400 rounded-lg text-white bg-gray-400/20"
                ref={fromRef}
              >
                <label
                  htmlFor="from"
                  className="block text-md font-medium px-4 pt-2"
                >
                  From
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={from}
                  autoComplete="off"
                  onChange={handleFromChange}
                  className="relative block w-full p-4 text-4xl bg-transparent text-white rounded-md shadow-sm focus:outline-none"
                />
                {fromSuggestions.length > 0 && (
                  <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {fromSuggestions.map((city) => (
                      <li
                        key={city.city}
                        onClick={() => selectFromSuggestion(city)}
                        className="cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-blue-600 hover:text-white"
                      >
                        {city.city}, {city.state}, {city.country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div
                onClick={() => interChange()}
                className="flex rotate-90 md:rotate-0 items-center p-2 text-2xl border h-fit rounded-full text-white bg-gray-400/20 cursor-pointer"
              >
                <CgArrowsExchange />
              </div>

              <div
                className="relative w-full border border-gray-400 rounded-lg text-white bg-gray-400/20"
                ref={toRef}
              >
                <label
                  htmlFor="to"
                  className="block text-md font-medium px-4 pt-2"
                >
                  To
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={to}
                  onChange={handleToChange}
                  className="block w-full p-4 text-4xl bg-transparent rounded-md shadow-sm focus:outline-none"
                />
                {toSuggestions.length > 0 && (
                  <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {toSuggestions.map((city) => (
                      <li
                        key={city.id}
                        onClick={() => selectToSuggestion(city)}
                        className="cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-blue-600 hover:text-white"
                      >
                        {city.city}, {city.state}, {city.country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full md:items-center md:justify-center md:flex-row gap-4">
              <div className="">
                <label
                  htmlFor="date"
                  className="block text-md font-medium text-white"
                >
                  Departure
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div className="">
                <label
                  htmlFor="return"
                  className="block text-md font-medium text-white"
                >
                  Return
                </label>
                <input
                  type="date"
                  id="return"
                  name="return"
                  className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>

              <div className="">
                <label
                  htmlFor="travellers"
                  className="block text-md font-medium text-white"
                >
                  Travellers & Class
                </label>
                <select
                  id="travellers"
                  name="travellers"
                  className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                >
                  <option>1 Traveller, Economy</option>
                  <option>2 Travellers, Economy</option>
                  <option>3 Travellers, Economy</option>
                  <option>1 Traveller, Business</option>
                  <option>2 Travellers, Business</option>
                  <option>3 Travellers, Business</option>
                  <option>1 Traveller, First Class</option>
                  <option>2 Travellers, First Class</option>
                  <option>3 Travellers, First Class</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-6 bg-blue-600 text-lg text-white font-semibold rounded-md shadow-sm hover:bg-blue-500 focus:outline-none "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
      <HandpickedColletion />
    </div>
  );
};

export default TransportAir;
