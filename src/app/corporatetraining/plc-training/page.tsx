
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SmartWorkerCard from '@/components/smartfactorycard';
import ContactComponent from '../../contact/contactcomponent'
import { PiSealCheckBold } from 'react-icons/pi';
import PageBanner from '@/components/pageBanner';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Accordion from '@/components/accordion'
import { plcItems } from '@/data/faqData';

const featureItem = (text: string, index: number) => (
  <li key={index} className="flex items-start gap-2 mb-2">
    <PiSealCheckBold className="text-green-500 mt-1" />
    <span>{text}</span>
  </li>
);

const SmartVision = () => {
  const featureData = [
    {
      title: 'Best PLC Training Institute in Noida',
      image: 'https://i.pinimg.com/736x/40/09/38/40093848efde87323245b02524d69225.jpg',
      desc: `Get the best PLC training in Noida with hands-on experience on basic & advance systems of various PLC brands such as Siemens, Rockwell, Mitsubishi, Omron, Delta on live panels & projects and keep yourself updated on latest hardware & software as per industry requirement right here in KP Automation.`,
      features: [
        'Our top-ranked training center in PLC provides real-time, project-based instruction. ',
        'To train the candidates, we have a team of professionals with knowledge. ',
        'Engineering students are increasingly enrolling in PLC training',
        'they pursue improved career prospects and ambitious future goals. ',
        'Given the benefits, this is a very practical training opportunity.',
      ],
    },
    {
      title: 'The Importance of PLC',
      image: 'https://i.pinimg.com/736x/60/84/1f/60841f657576f2bb9e9429a9d30e07ee.jpg',
      desc: `The PLC training modules provide comprehensive knowledge on machine operation guidelines. These modules cover a range of skills, from mastering programming languages to issuing instructions to equipment in order to achieve specific targets and complete tasks.`,
      features: [
        'Enhances production efficiency and reduces downtime.',
        'Hands on Experience on Real-Time Applications',
        'you can become a PLC programmer by joining our courses (Online – Offline).',
        'India has a large potential to get Automation in its Industrial Sector.',
        'Core skill for automation and control engineers.'
      ],
    },
     {
      title: 'Course Offered ',
      image: '/plc_programming.jpeg',
      desc: `PLC (Programmable Logic Controller) training teaches how to program, operate, and troubleshoot PLC-based automation systems. It includes ladder logic, timers, counters, memory bits, and I/O configuration.`,
      features: [
        'We offer flexible timings, small batches and the following customized Courses:',
        'Introduction to PLC Programming Software',
        'Fundamentals of PLC & Types & Architecture of PLC',
        'Logic and Ladder Diagrams & Wiring Different Field Devices to PLC',
        'Communication with SCADA Software',
      ],
    },
  ];


  return (
    <div className="bg-white text-gray-900">
      {/* Banner */}
       <PageBanner
        title="PLC Training"
        description='Transforming training with PLC and Industry 4.0 integration'
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
      />

      {/* CardSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto px-6 md:px-12 py-16 "
        >
          <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Skill Up with Practical Learning and Personal Guidance!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15  ">
            {[{
              icon: <CalendarMonthIcon className="text-5xl text-red-400 mb-2" />,
              title: "Duration",
              desc: "Within 20 days"
            }, {
              icon: <HistoryToggleOffIcon className="text-5xl text-green-400 mb-2" />,
              title: "Timing",
              desc: "10 am to 6 pm Monday to Saturday"
            }, {
              icon: <AutoStoriesIcon className="text-5xl text-blue-400 mb-2" />,
              title: "Eligibility",
              desc: "B.tech Diploma( electrical or electronics), ITI & also working Professional.."
            }].map((item, i) => (
              <motion.div
                key={i}
                //whileHover={{ scale: 1.03 }}
                className="card bg-base-50  shadow-sm p-5 items-center text-center "
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Sections */}
      {featureData.map(({ title, image, desc, features }, i) => (
        <div key={i} className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-95"
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
      
      {/* Accordion */}
      <main>
       <Accordion title="PLC Training FAQs" items={plcItems} />
      </main>
    </div>
  );
};

export default SmartVision;

