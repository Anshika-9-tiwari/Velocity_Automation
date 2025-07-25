'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SmartFactoryCard from '@/components/smartfactorycard';
import ContactComponent from '../../contact/contactcomponent';
import { PiSealCheckBold } from 'react-icons/pi';
import PageBanner from '@/components/pageBanner';

const featureItem = (text: string, index: number) => (
  <li key={index} className="flex items-start gap-2 mb-2">
    <PiSealCheckBold className="text-red-400 mt-1" />
    <span>{text}</span>
  </li>
);

const SmartSecurity = () => {
  const featureData = [
    {
      title: 'Smart Gate & ANPR',
      image: '/smartgate.jpeg',
      desc: `ANPR, which stands for Automatic Number Plate Recognition, is an advanced technology used to automatically capture and read vehicle number plates. The smart gate utilizes various automated features to enhance security, convenience, and control. `,
      features: [
        'Real-time object detection',
        'Image Processing',
        'Optical Character Recognition (OCR)',
        'Smart parking management',
        'Vehicle Tracking',
      ],
    },
    {
      title: 'Boundary Management System',
      image: '/boundary-scan.jpeg',
      desc: `The Boundary Management System offers a holistic approach to manage boundaries within a factory, encompassing physical access, data governance, safety zones, and equipment maintenance. `,
      features: [
        'Safety Zones and Hazard Management',
        'Real-Time Monitoring and Alerts',
        'Role based access',
        'Integration Capabilities with CCTV Cameras',
        'Analytics and Insights',
      ],
    },
    {
      title: 'Shoplifting Detection',
      image: '/soflifting.jpeg',
      desc: `Our shoplifting solution encompasses a holistic approach that combines artificial intelligence and computer vision-based technology. By addressing this issue proactively, retailers safeguard their profits, protect their reputation, and maintain a safe and welcoming environment for their customers.`,
      features: [
        'Theft Management',
        'Real-Time Monitoring and Alerts',
        'Integration Capabilities with CCTV Cameras',
        'Smart parking management',
        'Analytics and Insights',
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <PageBanner
        title="Smart Security"
        description="Transforming manufacturing with smart security 4.0 integration"
        imageUrl="https://i.pinimg.com/736x/a0/d3/cf/a0d3cf6c661b56c511e57403f001442f.jpg"
      />

      <SmartFactoryCard
        cardData={featureData.map(({ title, image }) => ({ title, image }))}
        pageTitle="Smart Security Modules"
        cardLink="/solutions/security"
      />

      {featureData.map(({ title, image, desc, features }, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-10 px-6 md:px-16 py-12 items-center`}
        >
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-4"
          >
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{desc}</p>
            <h3 className="font-semibold text-lg mt-4 mb-2">Security Features</h3>
            <ul>{features.map((f, idx) => featureItem(f, idx))}</ul>
          </motion.div>
        </div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContactComponent />
      </motion.div>
    </div>
  );
};

export default SmartSecurity;
