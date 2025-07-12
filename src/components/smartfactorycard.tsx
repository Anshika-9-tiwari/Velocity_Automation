'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Properly typed cardVariants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number], // Typed as tuple
    },
  }),
};

const SmartCard = ({
  image,
  title,
  index,
}: {
  image: string;
  title: string;
  index: number;
}) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.05 }}
    className="card bg-base-50 text-gray-900 shadow-xl cursor-pointer"
  >
    <figure>
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="object-cover w-full h-60"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-lg text-red-400">{title}</h2>
    </div>
  </motion.div>
);

const SmartFactoryCard = ({
  cardData,
  pageTitle = 'Overview',
  cardLink = '#',
}: {
  cardData: { image: string; title: string }[];
  pageTitle?: string;
  cardLink?: string;
}) => {
  return (
    <div className="bg-white py-10 ml-2 mt-3">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold px-10 mb-10 text-black"
      >
        {pageTitle}
      </motion.h1>

      <div className="grid gap-6 px-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Link href={cardLink} key={index}>
            <SmartCard {...card} index={index} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmartFactoryCard;
