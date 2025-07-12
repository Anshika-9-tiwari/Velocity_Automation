'use client';

import React from 'react';
import Image from 'next/image';
import PageBanner from '@/components/pageBanner';
import SmartWorkerCard from '@/components/smartfactorycard';
import { PiSealCheckBold } from 'react-icons/pi';
import { motion } from 'framer-motion';
import ContactComponent from '../../contact/contactcomponent';

const smartWorkerCards = [
  { image: '/facial-recog.jpeg', title: 'Face Recognition' },
  { image: '/workforce-cost.jpeg', title: 'Workforce Cost Analytics' },
  { image: '/feildsource.jpeg', title: 'Field Salesforce Monitoring' },
  { image: '/System_Ent.png', title: 'Workforce Presence & Planning' },
];

const featureItem = (text: string, index: number) => (
  <li key={index} className="flex items-start gap-2 mb-2">
    <PiSealCheckBold className="text-red-400 mt-1" />
    <span>{text}</span>
  </li>
);

const featureData = [
    {
      title: 'Facial Recognition',
      image: '/facial-recog.jpeg',
      desc: `Facial recognition is one of the fastest-growing technologies.it is widely used in mobile phones and tablets to ensure secure access.It searches the existing database of faces and compares them with the detected face to find a match.`,
      features: [
        'FR Kiosk/ Turnstile IoT integration',
        'Geo-Fencing Attendance via App',
        'Fraud Prevention - Liveliness Detection',
        'Offline Attendance Mode',
        'Attendance Reports & Analytics',
      ],
    },
    {
      title: 'Workforce Cost Analytics',
      image: '/workforce-cost.jpeg',
      desc: `Workforce Cost Analytics is a powerful tool that goes beyond traditional bookkeeping and expense tracking. By leveraging the capabilities of Workforce Cost Analytics, companies can identify areas of inefficiency, streamline their spending, and ultimately increase profitability.`,
      features: [
        'Real-time operational costs monitoring',
        'Escalation alerts for target monthly budget',
        'Anomaly detection in resource allocation',
        'Optimized plans & automated resource mapping',
        'Contractor Management',
      ],
    },
    {
      title: 'Field Salesforce Monitoring',
      image: '/feildsource.jpeg',
      desc: `Field Salesforce Monitoring enables businesses to track field operations in real-time. Field Salesforce Monitoring equips businesses with the tools they need to monitor the activities, location, and performance of their field workforce, ensuring efficient operations and improved customer experiences.`,
      features: [
        'Mobile application for salesforce',
        'Geo-restricted attendance',
        'GPS based visit adherence',
        'Real-time user visit tracking',
        'Attendance reports & analytics',
      ],
    },
    {
      title: 'Workforce Presence And Planning',
      image: '/System_Ent.png',
      desc: `AI-driven availability analysis helps in shift and task optimization using predictive insights. The Workforce Planning solution helps in suggesting optimized shifts, work arrangements, and task distributions.`,
      features: [
        'Workforce detection in a custom geo-fenced area',
        'Workforce availability analysis',
        'Mapping of machine availability with workforce',
        'Geo-Fencing Attendance via App',
        'Real time alerts',
      ],
    },
  ];

export default function SmartWorkerPage() {
  return (
      <>
        <PageBanner
          title="Smart Worker"
          description='Transforming manufacturing with smart worker  4.0 integration'
          imageUrl="https://i.pinimg.com/736x/a0/d3/cf/a0d3cf6c661b56c511e57403f001442f.jpg" 
        />
        <SmartWorkerCard
          cardData={smartWorkerCards}
          pageTitle="Smart Worker Overview"
          cardLink="/solutions/people"
        />
        {/* Detailed Sections */}
      {featureData.map(({ title, image, desc, features }, i) => (
        <div key={i} className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-12 items-center mt-5 bg-white text-black">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={image}
              alt={title}
              width={500}
              height={400}
              className="rounded-tr-4xl rounded-bl-4xl shadow-md object-cover w-full h-100"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{desc}</p>
            <h3 className="font-semibold text-lg mt-4 mb-2">Product Features:</h3>
            <ul>{features.map((text, idx) => featureItem(text, idx))}</ul>
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
      </>
  );
}

