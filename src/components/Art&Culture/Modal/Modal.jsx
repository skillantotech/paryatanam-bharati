import React, { useState } from "react";

function Modal({ title, items, isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold">×</button>
            {items.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left py-2 px-4 bg-gray-100 rounded mt-2"
                >
                  {item.title}
                </button>
                {openSection === index && (
                  <div className="px-4 py-2 bg-gray-50">
                    <ul>
                      {item.list.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-1">{subItem}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
