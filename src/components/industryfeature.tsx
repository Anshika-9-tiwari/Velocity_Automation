// components/IndustryFeatureSection.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureProps {
  title: string;
  image: string;
  desc: string;
  extra?: string;
  listItems?: string[];   // ✅ added list support
  index: number;
}

const IndustryFeatureSection = ({ title, image, desc, extra, listItems, index }: FeatureProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-10 py-10 items-center`}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <img
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-3xl shadow-md object-cover w-full h-95"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 space-y-4"
      >
        <h2 className="text-2xl text-gray-800 font-semibold">{title}</h2>
        <p className="text-gray-800">{desc}</p>
        
       {extra && <p className="italic text-sky-800">{extra}</p>}
        {/* ✅ List rendering */}
        {listItems && listItems.length > 0 && (
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default IndustryFeatureSection;
