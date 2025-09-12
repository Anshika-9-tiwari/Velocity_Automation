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
    <PiSealCheckBold className="text-green-500 mt-1" />
    <span>{text}</span>
  </li>
);

const SmartMachine = () => {
  const featureData = [
    {
      title: 'Real-Time Machine Monitoring',
      image: '/Machine-monitoring.png',
      desc: `Machine Monitoring helps industries improve productivity by tracking real-time performance. Our solution can be used for machine monitoring of different types of machines like stamping, blanking, reeling, peeling, welding, and die casting...`,
      features: [
        'Live machine utilization data',
        'Management Dashboard',
        'OEE (Availability, Quality, Performance)',
        'Downtime Analysis',
        'Reports and Analytics',
        'Production Planning'
      ],
    },
    {
      title: 'AI-Based Quality Inspection',
      image: '/ai-based.webp',
      desc: `AI-powered vision system helps detect defects in real-time to ensure zero-defect manufacturing...`,
      features: [
        'Defect identification in milliseconds',
        '100% product inspection',
        'Self-learning for continuous improvement',
        'Multi-camera support',
        'Real-time rejection alerts',
      ],
    },
    {
      title: 'Energy Monitoring',
      image: '/energy.webp',
      desc: `Our Energy Monitoring Solution is a comprehensive & intelligent platform designed to provide organizations with real-time insights into their energy consumption and usage patterns. The approach of the smart energy monitoring system keeps track of the energy consumption of various plant areas continuously.`,
      features: [
        'Micron-level accuracy',
        'Energy Consumption Analysis',
        'No human error in gauging',
        'Exportable inspection reports',
        'Energy Benchmarking',
      ],
    },
    {
      title: 'Condistion Based Monitoring',
      image: '/condition-monitoring.jpeg',
      desc: `Condition-Based Machine Monitoring Solution is a comprehensive and intelligent system designed to provide real-time insights into the performance of  machines and production lines. It empowers organisations with valuable data, analytics, and visualization tools`,
      features: [
        'Preventive maintenance',
        'Proactive maintenance scheduling',
        'Optimization of spare part inventory',
        'Anomalies detection',
        'Analytics and real-time data',
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <PageBanner
        title="Smart Machine"
        description="Transforming manufacturing with smart machine 4.0 integration"
        imageUrl="https://i.pinimg.com/736x/a0/d3/cf/a0d3cf6c661b56c511e57403f001442f.jpg"
      />

      <SmartFactoryCard
        cardData={featureData.map(({ image, title }) => ({ image, title }))}
        pageTitle="Smart Machine Modules"
        cardLink="/solutions/machine"
      />

      {featureData.map(({ title, image, desc, features }, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'bg-gray-100 ' } gap-10 px-6 md:px-16 py-12 items-center`}
        >
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
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
            <h3 className="font-semibold text-lg mt-4 mb-2">Product Features:</h3>
            <ul>{features.map((text, idx) => featureItem(text, idx))}</ul>
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

export default SmartMachine;