import { FaQuestion } from "react-icons/fa6";

const TrainBookingFAQs = () => {
  const faqs = [
    {
      question: "How can I book a train ticket?",
      answer:
        'Booking a train ticket is a straightforward process. Start by selecting your desired destination and travel dates. Next, indicate the number of passengers traveling, including any children or senior citizens. After entering these details, click on the "Search Trains" button. A list of available trains matching your criteria will appear, allowing you to choose the most convenient option. You can then proceed to select your preferred class of travel, review the fare details, and make the payment to confirm your booking.',
    },
    {
      question: "Can I cancel or change my train booking?",
      answer:
        'Yes, you can modify or cancel your train booking if your travel plans change. To do this, log in to your account and navigate to the "Manage Booking" section. Here, you can view your upcoming reservations and select the booking you wish to change or cancel. Please note that depending on the railway’s policy, certain fees or penalties may apply. It’s advisable to check the specific terms and conditions associated with your booking before proceeding with any changes.',
    },
    {
      question: "What documents do I need to carry for my train journey?",
      answer:
        "For your train journey, you must carry a valid government-issued identification, such as a passport, driver’s license, or Aadhaar card. This ID should match the details provided during booking. Additionally, ensure you have your train ticket, which can be in the form of a printed copy or an e-ticket displayed on your mobile device. It’s essential to have these documents readily accessible as they will be checked by the ticket examiner during your journey.",
    },
    {
      question: "Are there special fares for train tickets?",
      answer:
        "Yes, Indian Railways offers special fare concessions for various groups. These include senior citizens, students, armed forces personnel, and differently-abled passengers. When booking your ticket, ensure you select the appropriate fare type that applies to you. For instance, senior citizens can avail themselves of a discount by choosing the relevant option and providing the required age proof. Make sure to carry the necessary documentation to validate your eligibility for these special fares during your journey.",
    },
    {
      question: "How early should I arrive at the train station?",
      answer:
        "It is recommended to arrive at the train station at least 30 to 45 minutes before the scheduled departure of your train. Arriving early allows you sufficient time to navigate the station, locate your platform, and complete any necessary check-in procedures. If you are traveling from a major station or during peak hours, consider arriving even earlier to avoid any last-minute rush. Keep in mind that trains typically begin boarding 15 to 20 minutes before departure, so it’s crucial to be on time.",
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

export default TrainBookingFAQs;
