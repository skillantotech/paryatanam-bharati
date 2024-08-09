import { FaQuestion } from "react-icons/fa6";

const HotelsBookingFAQs = () => {
  const faqs = [
    {
      question: "How can I book a hotel?",
      answer:
        "You can book a hotel by selecting your destination, travel dates, and the number of guests. After clicking 'Search Hotels,' you will see a list of available properties. Choose your preferred hotel, enter guest details, and proceed to payment. Once the payment is confirmed, you’ll receive a booking confirmation via email with all the necessary details.",
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        "Yes, you can cancel or change your booking through the 'Manage Booking' section on our website. Depending on the hotel's policy, there might be cancellation or change fees. Some hotels offer flexible policies that allow changes with minimal fees, while others might have stricter policies. Always check the booking conditions before booking.",
    },
    {
      question: "What documents do I need to carry for my stay?",
      answer:
        "You must carry a valid government-issued ID such as a passport, driver's license, or Aadhaar card. Additionally, ensure you have a printed or digital copy of your booking details.",
    },
    {
      question: "What are special offers?",
      answer:
        "Special offers are discounted prices available to specific groups such as students, senior citizens, and travelers booking in advance. These offers typically offer lower rates and may include additional benefits like free breakfast or access to the fitness center. To avail of these offers, you must select the appropriate rate during booking.",
    },
    {
      question: "How early should I arrive at the hotel?",
      answer:
        "It is recommended to arrive at the hotel within the check-in time specified in your booking details. Arriving early allows you to settle in and take advantage of any amenities or services offered by the hotel. If you're traveling during peak seasons or with young children, it's advisable to arrive a little early to avoid any delays.",
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

export default HotelsBookingFAQs;
