import { FaQuestion } from "react-icons/fa6";

const FlightBookingFAQs = () => {
  const faqs = [
    {
      question: "How can I book a flight?",
      answer:
        'You can book a flight by selecting your destination, travel dates, and the number of passengers. After clicking "Search Flights," you will see a list of available flights. Choose your preferred flight, enter passenger details, and proceed to payment. Once the payment is confirmed, you’ll receive a booking confirmation via email with all the necessary details.',
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        'Yes, you can cancel or change your booking through the "Manage Booking" section on our website. Depending on the airline\'s policy, there might be cancellation or change fees. Some airlines offer flexible fares that allow changes with minimal fees, while others might have stricter policies. Always check the fare conditions before booking.',
    },
    {
      question: "What documents do I need to carry for my flight?",
      answer:
        "You must carry a valid government-issued ID such as a passport, driver's license, or Aadhaar card. Additionally, ensure you have a printed or digital copy of your flight ticket and any necessary travel documents like a visa if you’re flying internationally. For certain destinations, additional documents like vaccination certificates may be required.",
    },
    {
      question: "What are special fares?",
      answer:
        "Special fares are discounted prices available to specific groups such as students, senior citizens, armed forces, and medical professionals. These fares typically offer lower rates and may include additional benefits like extra baggage allowance. To avail of these fares, you must select the appropriate fare type during booking and present valid identification at the time of check-in.",
    },
    {
      question: "How early should I arrive at the airport?",
      answer:
        "It is recommended to arrive at the airport at least 2 hours before a domestic flight and 3 hours before an international flight. This allows sufficient time for check-in, baggage drop, and security screening. If you’re traveling during peak seasons or from a busy airport, it’s advisable to arrive even earlier to avoid any delays.",
    },
  ];

  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-7xl mx-4 xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 text-blue-600 bg-blue-100 rounded-full p-2">
                  <FaQuestion className="text-sm" />
                </span>
                <div className="w-full">
                  <div className="text-lg font-medium">{faq.question}</div>
                  <div className="text-gray-700 text-base mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightBookingFAQs;
