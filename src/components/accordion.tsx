'use client';

import React from 'react';

export type AccordionItem = {
  question: string;
  answer: string;
  extra: string;
  extra2: string;
};

type AccordionProps = {
  title?: string;
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ title = 'FAQs', items }) => {
  return (
    <div className="max-w-8xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>

      <div className="join join-vertical w-full space-y-4">
        {items.map((item, index) => (
          <div key={index} className="collapse collapse-arrow bg-gray-50">
            <input type="checkbox" name={`accordion-${index}`} />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content text-red-400" >
              <p className='mb-3'>{item.answer}</p>
              <p className='mb-3'>{item.extra}</p>
              <p>{item.extra2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
