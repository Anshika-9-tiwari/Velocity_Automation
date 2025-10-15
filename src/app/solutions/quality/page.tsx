'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MdManageHistory,
  MdOutlineDomainDisabled,
  MdQueryStats,
  MdSensorOccupied,
  MdOutlineRoomPreferences,
  MdVerifiedUser,
} from 'react-icons/md';
import { PiTrendUpFill, PiHandTap } from 'react-icons/pi';
import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';


const slides = [
    {
      title: "Innovative Automation Solutions",
      description: "Empowering industries with smart, efficient automation.",
      imageUrl: "https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?semt=ais_hybrid&w=740&q=80",
    },
     {
      title: "Innovative Automation Solutions",
      description: "Empowering industries with smart, efficient automation.",
      imageUrl: "https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg",
    },
    {
      title: "Tailored Engineering Expertise",
      description: "Customized industrial automation to boost productivity.",
      imageUrl: "https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg",
    },
  ];


export default function QualityInspection() {
  return (
      <>
       
        {/* banner */}
        <div>
          <PageBanner slides={slides} />
        </div>

        <div className="px-4 md:px-8 py-10 space-y-16 bg-white">
          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-7xl mx-auto py-10 px-0"
          >
            <h1 className="text-3xl font-semibold text-black">Quality Inspection Overview</h1>
            <p className="ml-2 text-gray-700 border-l-3 pl-2 border-l-red-400" >
              Quality inspection, using machine vision system is a critical process in manufacturing and production industries aimed to ensure products meet predefined quality standards and specifications.
            </p>
            <div className="space-y-3 text-gray-700">
              <p>
                It involves a systematic and thorough examination of products, materials, or processes to identify defects, deviations, or inconsistencies that could impact product performance, safety, and overall customer satisfaction.
              </p>
              <p>
                We use computer vision technology like laser, camera & sensors for quality inspection to maintain and improve product quality, reliability, and consistency.
              </p>
            </div>
          </motion.div>

          {/* Challenges Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-7xl mx-auto py-10 px-0"
          >
            <h1 className="text-3xl font-semibold text-blue-900">Challenges</h1>
            <p className="text-gray-700 mb-5">
              Industries across various sectors face a wide range of challenges. These challenges can vary depending on the industry and its specific circumstances, but some common challenges include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {[{
                icon: <MdManageHistory className="text-4xl text-red-400 mb-2" />,
                title: "High Costs",
                desc: "Failing to catch defects early in production process leading to higher costs"
              }, {
                icon: <MdOutlineDomainDisabled className="text-4xl text-red-400 mb-2" />,
                title: "Safety Risk",
                desc: "Bad quality of critical products leading to safety hazards"
              }, {
                icon: <MdQueryStats className="text-4xl text-red-400 mb-2" />,
                title: "Waste and Inefficiency",
                desc: "Without quality checks, resources are wasted on producing faulty products"
              }].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="card bg-base-50 shadow-md p-5 items-center text-center border-t-amber-700"
                >
                  {item.icon}
                  <h3 className="font-semibold text-lg mb-1 text-blue-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Anomaly Detection Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto py-10 px-0 flex flex-col-reverse lg:flex-row items-center gap-10"
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold text-blue-900 mt-4">Anomaly Detection</h2>
              <p className="mt-3 text-gray-700">
                Our anomaly detection tools utilize advanced algorithms to sift through vast datasets, providing you with real-time alerts and actionable intelligence.
              </p>
              <p className="mt-2 text-gray-700">
                Stay ahead of potential threats, anomalies, or irregularities, safeguarding your systems and optimizing performance.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mt-5">
              <Image
                src="/System_Ent.png"
                alt="System Entity"
                width={500}
                height={100}
                className="rounded-tr-3xl rounded-bl-3xl object-cover w-full h-85"
              />
            </div>
          </motion.div>

          {/* contact info */}
          <div>
            <ContactComponent />
          </div>
          
          {/* Value Delivered Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-7xl mx-auto py-10 px-0"
          >
            <h1 className="text-3xl font-semibold text-blue-900">Value Delivered</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {[{
                icon: <MdSensorOccupied className="text-4xl text-red-400 mx-auto mb-2" />,
                title: "Accurate Inspection"
              }, {
                icon: <MdOutlineRoomPreferences className="text-4xl text-red-400 mx-auto mb-2" />,
                title: "Reduced Costs"
              }, {
                icon: <MdVerifiedUser className="text-4xl text-red-400 mx-auto mb-2" />,
                title: "Enhanced Reputation"
              }, {
                icon: <PiTrendUpFill className="text-4xl text-red-400 mx-auto mb-2" />,
                title: "Improved Product Quality"
              }, {
                icon: <PiHandTap className="text-4xl text-red-400 mx-auto mb-2" />,
                title: "Data-Driven Decisions"
              }].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="hover:bg-base-200 rounded-lg p-4 transition-all duration-300 shadow-lg"
                >
                  {item.icon}
                  <h4 className="font-semibold text-gray-600">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </>
  );
}


