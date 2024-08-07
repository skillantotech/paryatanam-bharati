import React from "react";
import Card from "./Card";

const cardData = [
  {
    nights: "17 Nights - 18 Days",
    title: "Forts And Places of Rajasthan",
    img: "https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nights: "8 Nights - 9 Days",
    title: "Golden Triangle & Majestic Tiger",
    img: "https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nights: "10 Nights - 11 Days",
    title: "Classical India Tour",
    img: "https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nights: "3 Nights - 4 days",
    title: "Golden Triangle tour",
    img: "https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nights: "10 Nights - 11 Days",
    title: "Best Of Rajasthan",
    img: "https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nights: "9 Nights - 10 Days",
    title: "Golden Triangle Tour With India Wildlife",
    img: "https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function CardContainer() {
  return (
    <div className="container mx-auto flex flex-wrap justify-center mt-16">
      {cardData.map((card, index) => (
        <Card
          key={index}
          nights={card.nights}
          title={card.title}
          img={card.img}
        />
      ))}
    </div>
  );
}

export default CardContainer;
