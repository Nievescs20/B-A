import React, { useState } from "react";

function FooterField({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black py-4">
      <div className=" mx-auto px-4">
        <div
          className="flex md:flex-row justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="font-medium text-white text-lg">{data.label}</h2>
          <svg
            className={`w-6 h-6 text-white transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="flex flex-col  py-4">
            {data.links.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-500 py-2 md:mx-2"
                target="_blank"
              >
                {item.linkLabel}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FooterField;
