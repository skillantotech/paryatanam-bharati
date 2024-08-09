import React from 'react';
import { FaQuestion } from 'react-icons/fa6';

const BusBookingFAQ = () => {
  const faqs = [
    {
      question: 'How can I book a bus ticket?',
      answer: 'Booking a bus ticket is simple and convenient. Begin by selecting your departure and arrival locations along with your intended travel dates. Specify the number of passengers, including any children or senior citizens. Once you’ve entered these details, click on the "Search Buses" button. You will be presented with a list of available buses and their schedules. Choose the bus that suits your needs, select your seat, and proceed to payment. After confirming your booking, you will receive a ticket that can be either printed or shown on your mobile device.'
    },
    {
      question: 'Can I cancel or change my bus booking?',
      answer: 'Yes, you can cancel or modify your bus booking if necessary. To do so, access the "Manage Booking" section on the website or app where you made the reservation. Here, you can view your bookings and select the one you wish to change or cancel. Please be aware that cancellation or change fees might apply, depending on the bus operator’s policies and the timing of your request. It’s recommended to check these details before making any changes to avoid unexpected charges.'
    },
    {
      question: 'What documents do I need to carry for my bus journey?',
      answer: 'For your bus journey, you need to carry a valid ID proof such as a driver’s license, passport, or any other government-issued identification. This is required to verify your identity during the journey. Additionally, you should bring your bus ticket, which could be a physical copy or an e-ticket available on your mobile phone. Ensure that your ID and ticket are easily accessible as they will be checked by the bus staff or conductor.'
    },
    {
      question: 'Are there special fares for bus tickets?',
      answer: 'Yes, many bus operators offer special fares for groups like senior citizens, students, and armed forces personnel. During the booking process, make sure to select the appropriate fare category that applies to you. For example, senior citizens might receive a discount on their fare. Be prepared to present relevant identification or proof of eligibility for these discounts at the time of boarding. This helps in ensuring you receive the applicable fare reduction.'
    },
    {
      question: 'How early should I arrive at the bus station?',
      answer: 'It is advisable to arrive at the bus station at least 30 minutes before the scheduled departure time of your bus. This allows you ample time to check-in, locate your boarding gate or platform, and handle any last-minute details. If you are traveling from a busy terminal or during peak travel times, consider arriving earlier to avoid any delays. Buses usually start boarding 15 minutes before departure, so being punctual is key to a smooth travel experience.'
    },
  ];

  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className='max-w-7xl mx-4 xl:mx-auto'>
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

export default BusBookingFAQ;


