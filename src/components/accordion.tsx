'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export type AccordionItem = {
  question: string;
  answer: string;
  extra: string;
  extraline: string;
};

type AccordionProps = {
  title?: string;
  items: AccordionItem[];
};

export default function Accordion({ title, items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto  px-6 md:px-12 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>
      <div className="join join-vertical w-full space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-md  bg-gray-50">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4  text-left font-medium bg-gray-100 hover:bg-gray-200 transition"
            >
              <span>{item.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="p-4 space-y-2 bg-white border-t ">
                <p className="text-gray-800 italic" >{item.answer}</p>
                {item.extra && <p className="text-red-400 font-medium italic">{item.extra}</p>}
                {item.extraline && <p className="text-gray-600 italic">{item.extraline}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

