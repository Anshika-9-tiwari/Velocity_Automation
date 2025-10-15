'use client';

import React from 'react';
import Image from 'next/image';
import { 
  MdContactEmergency, 
  MdOutlineSecurity, 
  MdOutlineContentPasteOff, 
  MdOutlineDifference, 
  MdLeaderboard 
} from 'react-icons/md';
import ContactComponent from '../../contact/contactcomponent'
import { motion } from 'framer-motion';
import PageBanner from '@/components/pageBanner';

const slides = [
  {
    title: "Smart Gate & ANPR",
    description: "Empowering industries with smart, efficient automation.",
    imageUrl: "/smartgate.jpeg",
  },
  {
    title: "Boundary Management System",
    description: "The system streamlines operations with automation, enhancing safety & compliance.",
    imageUrl: "/Warehousemanage.jpeg",
  },
    {
    title: "Shoplifting Detection Solutions",
    description: "Prevent theft and revenue loss with AI-powered & detection systems.",
    imageUrl: "/soflifting.jpeg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Security = () => {
  return (
    <>
      {/* banner */}
      <div>
        <PageBanner slides={slides} />
      </div>

      {/* Overview Section */}
      <motion.div 
        className="max-w-7xl mx-auto py-10 px-0 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-3xl font-bold mb-4 ml-2 text-black">Smart Gate & ANPR Overview</h1>
        <p className="mb-4 ml-2 text-gray-800">
          ANPR (Automatic Number Plate Recognition) uses cameras and software to capture vehicle license plates and convert them into machine-readable text.
        </p>
        <p className='ml-2 text-gray-800'>
          It enhances efficiency and control and is widely used across sectors for automated vehicle access and data capture.
        </p>
      </motion.div>

      {/* Challenges Section */}
      <motion.div 
        className="bg-gray-50 text-black py-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl font-semibold mb-6">Challenges</h2>
          <p className="mb-6 ">
            Common challenges in vehicle access and control systems:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {[
              {
                icon: <MdOutlineContentPasteOff className="text-4xl text-red-400 mb-2 " />,
                title: 'Manual Vehicle Data Entry',
                text: 'No system for vehicle data entry',
              },
              {
                icon: <MdOutlineDifference className="text-4xl text-red-400 mb-2" />,
                title: 'Inaccurate Data Collection',
                text: 'Data is collected manually and is prone to errors',
              },
              {
                icon: <MdOutlineSecurity className="text-4xl text-red-400 mb-2" />,
                title: 'Higher Security Risks',
                text: 'Unidentified vehicles increase risks',
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="card bg-base-50 p-6 shadow-m"
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Boundary Management Section */}
      <motion.div 
        className="max-w-7xl mx-auto py-10 px-0 flex flex-col-reverse lg:flex-row items-center gap-10 bg-white text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Image
          src="/Warehousemanage.jpeg"
          width={530}
          height={350}
          alt="Boundary Management"
          className="rounded-tr-3xl rounded-bl-3xl w-full max-w-md p-1.5"
        />
        <div >
          <h2 className="text-2xl font-semibold mb-4 ml-1.5">Boundary Management System</h2>
          <p className="mb-2 ml-2">
            Manage physical access, data, and workflows using vision-based technology to protect industrial boundaries efficiently.
          </p>
          <p className='ml-2'>
            The system streamlines operations with automation, enhancing safety and compliance.
          </p>
        </div>
      </motion.div>

      {/* Shoplifting Detection Section */}
      <motion.div 
        className="bg-gray-50 text-gray-800 py-10 px-4 max-w-8xl "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto py-10 px-0 flex flex-col-reverse lg:flex-row items-center gap-15">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shoplifting Detection Solutions</h2>
            <p className="mb-2">
              Prevent theft and revenue loss with AI-powered surveillance and detection systems.
            </p>
            <p>
              Ensure a safer shopping environment for customers and staff with proactive monitoring.
            </p>
          </div>
          <Image
            src="/Warehouse.jpeg"
            width={530}
            height={300}
            alt="Shoplifting Detection"
            className="rounded-tl-3xl  rounded-br-3xl w-full max-w-md"
          />
        </div>
      </motion.div>

      {/* More Challenges */}
      <motion.div 
        className="py-10 px-4 bg-white text-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">More Challenges Faced by Industries</h2>
          <p className="mb-7">Additional concerns impacting safety, staff, and reputation:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {[
              {
                icon: <MdLeaderboard className="text-4xl text-red-400 mb-2" />,
                title: 'Financial Losses',
                text: 'Theft affects revenue and profitability',
              },
              {
                icon: <MdContactEmergency className="text-4xl text-red-400 mb-2" />,
                title: 'Employee Morale',
                text: 'Security risks cause dissatisfaction and turnover',
              },
              {
                icon: <MdOutlineSecurity className="text-4xl text-red-400 mb-2" />,
                title: 'Reputation Damage',
                text: 'Frequent theft damages customer trust',
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="card bg-base-50 p-6 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

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
};

export default Security;


