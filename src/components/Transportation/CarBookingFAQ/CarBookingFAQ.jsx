import React from 'react';
import { FaQuestion } from 'react-icons/fa6';

const CarBookingFAQ = () => {
  const faqs = [
    {
      question: 'How can I book a car rental?',
      answer: 'Booking a car rental is a straightforward process. Start by selecting your pick-up and drop-off locations, as well as your travel dates and times. Enter the details of any additional drivers if applicable. Once you click "Search Cars," you will see a list of available vehicles with various options and prices. Choose the car that best suits your needs, select any additional features or insurance options, and proceed to payment. After completing the booking, you will receive a confirmation email with your rental details and instructions.'
    },
    {
      question: 'Can I cancel or modify my car rental booking?',
      answer: 'Yes, you can cancel or modify your car rental booking, but policies may vary by provider. To make changes, go to the "Manage Booking" section on the rental company’s website or app. Here, you can select the reservation you want to modify or cancel. Be aware that changes or cancellations may incur fees depending on the timing and the rental company’s terms. It is advisable to review the specific cancellation policy associated with your booking to understand any potential charges.'
    },
    {
      question: 'What documents do I need to present when picking up a rental car?',
      answer: 'When picking up a rental car, you need to present a valid driver’s license that matches the name on the reservation. Additionally, you will need to provide a credit card in the name of the primary driver for security and payment purposes. Some rental agencies may also require additional identification, such as a passport or another form of government-issued ID. Ensure that you have all necessary documents ready to avoid any delays in the pick-up process.'
    },
    {
      question: 'Are there special rates or discounts for car rentals?',
      answer: 'Yes, many car rental companies offer special rates and discounts for various groups, such as senior citizens, students, and frequent renters. Discounts may also be available for members of certain organizations or loyalty programs. During the booking process, make sure to enter any discount codes or select the applicable rate category to receive these benefits. Verify the terms and conditions of the discount to ensure eligibility and avoid any issues at the time of pick-up.'
    },
    {
      question: 'How early should I pick up the rental car?',
      answer: 'It is recommended to pick up the rental car at the designated time specified in your booking to avoid any additional charges. Arriving early can provide you with more flexibility and time to inspect the vehicle. If you anticipate arriving earlier than your scheduled time, it’s a good idea to contact the rental agency in advance to confirm if an early pick-up is possible and if there are any additional charges. Ensuring a timely pick-up helps to streamline your rental experience and avoid any last-minute issues.'
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

export default CarBookingFAQ;


