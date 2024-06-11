import React from "react";

function Imageses() {
  return (
    <>
      <div className="flex">
        <div className="flex pt-16">
          <div className="h-56 w-60">
            <img
              src="https://static.saltinourhair.com/wp-content/uploads/2019/03/23140725/best-travel-quotes-philippines.jpg"
              alt=""
            />
          </div>
          <div className="pl-6">
            <h5 className="pb-3">Travel</h5>
            <h2 className="text-3xl font-bold pb-3">
              Unveiling the Hidden Gems of India
            </h2>
            <h5>Read More About Cultural Heritage of India</h5>
            <div className="flex pt-5">
              <img
                className="h-12 w-12 rounded-full "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg"
                alt=""
              />
              <div className="pl-3">
                <h5>John Doe</h5>
                <h5>11 Jan 2022 . 5 min read</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-16">
          <div className="h-60 w-60">
            <img
              src="https://sundayguardianlive.com/wp-content/uploads/2022/12/Indian-Cuisine-Fifth-Best-In-The-World.jpg"
              alt=""
            />
          </div>
          <div className="pl-6">
            <h5 className="pb-3">Cuisine</h5>
            <h2 className="text-3xl font-bold pb-3">
              Indulge in the Flavors of India
            </h2>
            <h5>Experience the Vibrant Festivals of India</h5>
            <div className="flex pt-5">
              <img
                className="h-12 w-12 rounded-full "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWt_YzxGnmYxvm9-9fyfSiUv6j5-X5NpF_Fg&s"
                alt=""
              />
              <div className="pl-3">
                <h5>Jane Smith</h5>
                <h5>11 Jan 2022 . 5 min read</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imageses;
