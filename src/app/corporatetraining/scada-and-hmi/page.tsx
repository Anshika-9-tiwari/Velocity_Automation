
'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { scadaItems } from '@/data/faqData';
import { PiSealCheckBold } from 'react-icons/pi';

const featureItem = (text: string, index: number) => (
  <li key={index} className="flex items-start gap-2 mb-2">
    <PiSealCheckBold className="text-green-500 mt-1" />
    <span>{text}</span>
  </li>
);

const Industries = () => {
 const featureData = [
    {
      title: 'SCADA & HMI courses offer career-focused learning opportunities.',
      image: '/scada-hmi.png',
      desc: `At KP Automation, we are committed to shaping the future of industrial automation professionals.To providing comprehensive training in cutting-edge technologies like SCADA (Supervisory Control and Data Acquisition) and HMI .`,
      features: [
        'Provides real-time data visualization and remote control.',
        'Helps in quick decision-making and alarms in case of faults.',
        'SCADA Software – Processes and displays data; issues commands',
        'HMI Screens – Graphical interface for human operators.'
      ],
    },
    {
      title: 'What is SCADA?',
      image: 'https://i.pinimg.com/736x/b4/da/4a/b4da4a733fbf0d19eca0abcdcd9b6660.jpg',
      desc: `SCADA (Supervisory Control and Data Acquisition) is a system used to monitor and control industrial processes remotely. It collects real-time data from field devices like PLCs and RTUs (Remote Terminal Units), processes it, and enables centralized control from a supervisory computer or control center`,
      features: [
        'Enhances production efficiency and reduces downtime.',
        'Hands on Experience on Real-Time Applications',
        'you can become a SCADA expert by joining our courses (Online – Offline).',
        'India has a large potential to get Automation in its Industrial Sector.',
      ],
    },
     {
      title: 'What is HMI?',
      image: 'https://i.pinimg.com/736x/0d/11/6d/0d116d5af42cebcb5f5f50bcce1db7ba.jpg',
      desc: `HMI (Human-Machine Interface) is the visual interface that operators use to interact with machines or automation systems. It typically displays process parameters, alarms, system status, and allows manual control inputs through touchscreens or computers.`,
      features: [
        'Oil & Gas Pipelines – Monitor pressures, flow rates, leak detection.',
        'Manufacturing Plants – Track production metrics, machinery status, and quality control.',
        'Water Treatment Plants – Control pumps, valves, tank levels, and chemical dosing.',
        'Electric Power Grids – Monitor substations, power flow, and faults.',
      ],
    },
    {
      title: 'Career Relevance:',
      image: 'https://i.pinimg.com/736x/27/3a/1d/273a1dde3670b9e8e39d094d7993b711.jpg',
      features: [
        'Essential knowledge for Control Engineers, Automation Engineers, & Plant Operators.',
        'Foundation for roles in Smart Factory, Industrial IoT, & Digital Twin technologies.',
        'Used across sectors like energy, manufacturing, utilities, & infrastructure.',
        'Operators can view the live status of every connected process.',
        'Reduces need for manual supervision, especially in hazardous or distributed environments.',
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="SCADA and HMI Training"
        description='Transforming manufacturing with SCADA and HMI Industry 4.0 integration'
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
      />

      <div className="px-6 md:px-16 py-12 ">
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
              desc: "Within 5 days"
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
                className="card bg-base-50 p-5 items-center text-center "
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Overview Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            SCADA (Supervisory Control and Data Acquisition) & HMI (Human-Machine Interface) training covers monitoring and control of industrial processes. SCADA systems collect real-time data from PLCs, while HMI screens display this data to operators. 
          </p>
          <p className="mb-4 text-red-400">
            <i>The training includes screen design, alarm configuration, historical data logging, and system integration.</i>
          </p>
          <p>
            SCADA (Supervisory Control and Data Acquisition) and HMI (Human-Machine Interface) are used to visualize, monitor, and control industrial processes.
          </p>
        </div>

        {/* Sections */}
        {featureData.map(({ title, image, desc, features }, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-12 items-center">
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
                className="rounded-bl-4xl rounded-tr-4xl shadow-md object-cover w-full h-95"
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
        

        {/* Accordion */}
        <main>
          <Accordion title="SCADA & HMI FAQs" items={scadaItems} />
        </main>

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
    </div>
  );
};

export default Industries;

