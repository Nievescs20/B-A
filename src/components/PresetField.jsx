import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function PresetField({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-200 py-4 border-b-2 border-gray-300">
      <div className=" mx-auto">
        <div
          className="flex md:flex-row justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="font-medium text-black text-lg pl-2">{data.title}</h2>
          <svg
            className={`w-6 h-6 text-white transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
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
          <div className="flex flex-col bg-white pl-2">
            <ul>
              {data.bullets.map((bullet) => (
                <li className="my-4 text-black" key={uuidv4()}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PresetField;
