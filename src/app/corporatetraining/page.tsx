'use client';

import Link from 'next/link';
import PageBanner from '@/components/pageBanner';
import { motion } from 'framer-motion';
import { MdManageHistory, MdOutlineDomainDisabled, MdQueryStats } from 'react-icons/md';
import ContactComponent from '../contact/contactcomponent';
import { ArrowForward } from '@mui/icons-material';

const trainings = [
  {
    title: 'Drives & Motors',
    description: 'Master electric motors, drives, and industrial motion control systems with hands-on sessions.',
    image: 'https://i.pinimg.com/1200x/2d/ba/05/2dba05bf87129a6df60f7a18d82a1154.jpg',
    link: '/corporatetraining/drives-motors',
  },
  {
    title: 'Industrial Automation',
    description: 'Learn the core principles of industrial automation including sensors, actuators, and control logic.',
    image: 'https://i.pinimg.com/736x/01/08/68/01086883bf3541a11e1d28362842d7ee.jpg',
    link: '/corporatetraining/industrial-automation-training',
  },
  {
    title: 'PLC Programming',
    description: 'Gain expertise in PLC programming, ladder logic, and real-time control implementation.',
    image: '/plc_programming.jpeg',
    link: '/corporatetraining/plc-training',
  },
  {
    title: 'PLC Networking',
    description: 'Understand communication between PLCs, protocols like Modbus, Profibus, and EtherNet/IP.',
    image: '/PLC_SCADA.jpeg',
    link: '/corporatetraining/plc-networking',
  },
  {
    title: 'Process Instrumentation',
    description: 'Explore measurement instruments used in process industries for pressure, flow, and temperature.',
    image: '/process-instrumentation.png',
    link: '/corporatetraining/process-instrumentation',
  },
  {
    title: 'SCADA & HMI',
    description: 'Design and operate SCADA systems and HMI interfaces for real-time industrial monitoring.',
    image: 'https://i.pinimg.com/736x/b4/da/4a/b4da4a733fbf0d19eca0abcdcd9b6660.jpg',
    link: '/corporatetraining/scada-and-hmi',
  },
  {
    title: 'Servo Motor Training',
    description: 'Practical sessions on configuring and tuning servo motors for precision applications.',
    image: 'https://i.pinimg.com/736x/1a/af/ef/1aafefe8eed871f2328692a7dacacb81.jpg',
    link: '/corporatetraining/servo-motor',
  },
];

export default function CorporateTraining() {
  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="Corporate Training Programs"
        description="Innovating Workforce Skills for Industrial Excellence"
        imageUrl="https://i.pinimg.com/736x/2c/44/81/2c4481633cbbd9f084aed8a50a5dc8fd.jpg"
      />
      {/* CardSection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-8xl mx-auto px-6 md:px-12 py-16"
      >
        <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Skill Up with Practical Learning and Personal Guidance!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {[{
            icon: <MdManageHistory className="text-4xl text-red-400 mb-2" />,
            title: "Industry Relevant Skills",
            desc: "Level up your skills to industry standards and become a pro!"
          }, {
            icon: <MdOutlineDomainDisabled className="text-4xl text-green-400 mb-2" />,
            title: "Practice-Based Learning",
            desc: "Gain practical knowledge through our hands-on projects and assignments."
          }, {
            icon: <MdQueryStats className="text-4xl text-blue-400 mb-2" />,
            title: "1:1 Mentor Support",
            desc: "Master concepts through one-on-one mentoring with our experts."
          }].map((item, i) => (
            <motion.div
              key={i}
              //whileHover={{ scale: 1.03 }}
              className="card bg-base-50 shadow-xl p-5 items-center text-center"
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CourseCardSection */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Training Modules</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainings.map((training, index) => (
            <motion.div whileHover={{ scale: 1.01 }}>
              <div
                key={index}
                className="bg-base-50 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
              >
                <figure>
                  <img src={training.image} alt={training.title} className="w-full h-55 object-cover" />
                </figure>
                <div className="p-5 space-y-3 ">
                  <h3 className="text-xl font-semibold">{training.title}</h3>
                  <p className="text-gray-600">{training.description}</p>
                  <Link href={training.link}>
                    <button className="btn btn-sm text-white bg-red-400 mt-2">
                      Read More
                      <ArrowForward className="text-gray-50 mt-1 cursor-pointer" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
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
}
