import { useState } from "react";

const InclusionExclusionTabs = () => {
  const [activeTab, setActiveTab] = useState("Inclusions");

  return (
    <div className="max-w-7xl mx-4 xl:mx-auto mb-10 mt-4 lg:mt-0">
      <div>
        <ul className="flex border-b-4">
          <li
            className={`cursor-pointer py-2 px-4 text-lg font-semibold ${
              activeTab === "Inclusions"
                ? "border-b-2 border-blue-500 text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Inclusions")}
          >
            Inclusions
          </li>
          <li
            className={`cursor-pointer py-2 px-4 text-lg font-semibold ${
              activeTab === "Exclusions"
                ? "border-b-2 border-blue-500 text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("Exclusions")}
          >
            Exclusions
          </li>
        </ul>
        <div className="mt-4">
          {activeTab === "Inclusions" && (
            <div className="text-lg text-gray-700 text-left">
              <ul className="list-decimal pl-6  ">
                <li>Accommodation as per the itinerary</li>
                <li>Daily Breakfast at the hotel/houseboat</li>
                <li>One hour shikara ride on Dal Lake once during the stay.</li>
                <li>
                  Pick up and drop from Srinagar Airport by a private Non Ac Car
                </li>
                <li>All sightseeing by private Non Ac cars as per itinerary</li>
                <li>State tax, hotel tax, and driver charge.</li>
                <li>All toll taxes, driver’s allowance, parking charges</li>
              </ul>
            </div>
          )}
          {activeTab === "Exclusions" && (
            <div className="text-lg text-gray-700 text-left">
              <ul className="list-decimal pl-6 ">
                <li>
                  Items of personal nature: tips, laundry, room service,
                  telephone, alcoholic or non-alcoholic beverages, room heaters,
                  boat rides, pony/horse rides, safaris, rafting, skiing,
                  skating, cable car/ropeway rides, helicopter rides, additional
                  sightseeing tours/excursions not included in the itinerary,
                  still or video camera fees, etc.
                </li>
                <li>
                  Any kind of insurance, Air, Train, or Bus fare from/to your
                  originating city of stay, unless specified.
                </li>
                <li>
                  Garden entrance fee and guide charges, wherever applicable.
                </li>
                <li>Snow Jeep from Tangmarg to Gulmarg & back.</li>
                <li>
                  Aru, Betaab Valley, and Chandanwari trip in Pahalgam (as this
                  sightseeing is done by local taxis only and is on direct
                  payment basis).
                </li>
                <li>
                  Personal meals and personal expenses like entry tickets,
                  telephone, laundry, or anything which is not mentioned in the
                  inclusions.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InclusionExclusionTabs;
