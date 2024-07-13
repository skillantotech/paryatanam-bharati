import { useState } from "react";
import Accordion from "./Accordion";

const SateFAQsData = [
  {
    id: "Q1",
    question: "When is the best time to visit Rajasthan?",
    answer:
      "The best time to visit Rajasthan is between October and February when the weather is perfect for sightseeing. The monsoon season between July and September is also a good time to visit Rajasthan when the mercury dips slightly. In the summer season, it can be difficult to plan a trip to Rajasthan because of extremely high temperature.",
  },
  {
    id: "Q2",
    question: "What is the best way to travel to Rajasthan?",
    answer:
      "Rajasthan enjoys good connectivity via rail, road, and air. Many of its major cities have their own airports, whereas, trains and roads almost all parts of the state.",
  },
  {
    id: "Q3",
    question: "Is Rajasthan safe for solo women travellers?",
    answer:
      "Yes, Rajasthan is quite safe for solo women travellers. However, it is advised to practise caution like one does anywhere in the world while travelling.",
  },
  {
    id: "Q4",
    question: "What are the must-try dishes in Rajasthan?",
    answer:
      "The best dishes to try in Rajasthan are: Dal Baati Churma, Gatte ki Sabzi, Lal Maas, Ker Sangri, Papad ki Sabzi, Onion Kachori.",
  },
  {
    id: "Q5",
    question: "Why to book Rajasthan tour packages with PB?",
    answer:
      "We are a certified travel company with over 18 years of experience. We are capable of offering 24x7 personalised and cost-effective services for Rajasthan tours.",
  },
  {
    id: "Q6",
    question: "Do your family tours to Rajasthan have something for the kids?",
    answer:
      "Yes, our family tours to Rajasthan include several activities like camel safari, boating etc. for the kids.",
  },
  {
    id: "Q7",
    question: "How many domestic & international airports are in Rajasthan?",
    answer:
      "There are 9 airports in total in Rajasthan. The state has only one international airport situated in the capital city of Jaipur.",
  },
  {
    id: "Q8",
    question: "How many minimum days are required to visit Rajasthan?",
    answer:
      "Around 6-10 days are required to see Rajasthan’s popular destinations.",
  },
  {
    id: "Q9",
    question:
      "Are massage, yoga & ayurveda services/centres available in Rajasthan?",
    answer:
      "Yes, there are many resorts and centres in different cities of Rajasthan that offer massage, yoga, ayurveda services.",
  },
];

const StateFAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  return (
    <div className="container max-w-7xl mx-auto p-4 mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Here are some of the most common questions we get about Rajasthan. If
          you have any other questions, feel free to reach out to us!
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 ">
        {SateFAQsData.map((faq) => (
          <Accordion
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openAccordionId === faq.id}
            setOpenAccordionId={setOpenAccordionId}
          />
        ))}
      </div>
    </div>
  );
};

export default StateFAQs;
