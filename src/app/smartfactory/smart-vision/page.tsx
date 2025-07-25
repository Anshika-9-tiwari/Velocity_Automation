

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SmartWorkerCard from '@/components/smartfactorycard';
import ContactComponent from '../../contact/contactcomponent'
import { PiSealCheckBold } from 'react-icons/pi';
import PageBanner from '@/components/pageBanner';

const featureItem = (text: string, index: number) => (
  <li key={index} className="flex items-start gap-2 mb-2">
    <PiSealCheckBold className="text-green-500 mt-1" />
    <span>{text}</span>
  </li>
);

const SmartVision = () => {
  const featureData = [
    {
      title: 'Object Presence Dection',
      image: '/object-presence.jpg',
      desc: `Harnessing the latest in computer vision and artificial intelligence, our tools empower you to effortlessly identify and track objects in any environment. Seamlessly integrate object presence detection into your applications, enhancing security, automating processes, and enabling a new era of efficiency`,
      features: [
        'Automatic defect identification',
        'High-speed image processing',
        'Multi-angle camera views',
        'Integration with rejection mechanisms',
        'Live defect alerts to dashboard',
      ],
    },
    {
      title: 'Anomaly Detection',
      image: '/industry-control.jpg',
      desc: `Our anomaly detection tools utilize advanced algorithms to sift through vast datasets, providing you with real-time alerts and actionable intelligence.`,
      features: [
        'Automatic defect identification',
        'High-speed image processing',
        'Multi-angle camera views',
        'Integration with rejection mechanisms',
        'Live defect alerts to dashboard',
      ],
    },
     {
      title: 'Object Segmentation',
      image: '/object-segmentation.jpeg',
      desc: `Revolutionize your visual understanding with our advanced object segmentation solutions. Delve into the realm of precision and detail as our cutting-edge technology seamlessly separates and identifies objects in images or videos.`,
      features: [
        'Automatic defect identification',
        'High-speed image processing',
        'Multi-angle camera views',
        'Integration with rejection mechanisms',
        'Live defect alerts to dashboard',
      ],
    },
    {
      title: 'Visual Detection',
      image: '/visual-detection.jpeg',
      desc: `From manufacturing lines to product inspections, our technology ensures a meticulous examination of every detail, guaranteeing the highest standards of quality.`,
      features: [
        'Automatic defect identification',
        'High-speed image processing',
        'Multi-angle camera views',
        'Integration with rejection mechanisms',
        'Live defect alerts to dashboard',
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Banner */}
       <PageBanner
        title="Smart Vision"
        description='Transforming manufacturing with smart vision 4.0 integration'
        imageUrl="https://i.pinimg.com/736x/a0/d3/cf/a0d3cf6c661b56c511e57403f001442f.jpg" 
      />

      {/* Cards */}
      <SmartWorkerCard
        cardData={featureData.map(({ title, image }) => ({ title, image }))}
        pageTitle="Smart Vision Modules"
        cardLink="/solutions/quality"
      />

      {/* Sections */}
      {featureData.map(({ title, image, desc, features }, i) => (
        <div key={i} className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{desc}</p>
            <h3 className="font-semibold text-lg mt-4 mb-2">Key Features</h3>
            <ul>{features.map((f, idx) => featureItem(f, idx))}</ul>
          </motion.div>
        </div>
      ))}

      {/* Contact CTA */}
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

export default SmartVision;

