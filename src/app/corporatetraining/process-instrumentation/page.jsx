
'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature'; //reuseable
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { instrumentationItems } from '@/data/faqData';

const Industries = () => {
  const featureData = [
    {
      title: 'Process Instrumentation',
      image: 'https://i.pinimg.com/1200x/79/7a/95/797a95b426cd0f9224dbcd8ff0b1c9e2.jpg',
      desc: `Machine monitoring in the manufacturing industry enables tracking and analyzing performance, health, and utilization of machinery. Our AI solution helps optimize production, reduce downtime, and ensure product quality.`,
      extra: `KP Automation process instrumentation training focuses on the overall skill development by enhancing monitoring, constellating and processing skills of the students.`,
    },
    {
      title: 'Importance of Process Instrumentation:',
      image: '/process-instrumentation.png',
      desc: `✅ Works in tandem with PLC, SCADA, and DCS systems for seamless automation. ✅ Monitors critical parameters to avoid accidents and meet regulatory standards.`,
      extra: `✅ Predictive Maintenance – Enables condition monitoring to prevent unplanned downtime. ✅ Product Quality – Maintains consistent product characteristics.`,
    },
    {
      title: 'Career Benefits:',
      image: 'https://i.pinimg.com/736x/32/6f/27/326f271a1ecfdf23a52246a52c1c578a.jpg',
      desc: `High demand in process industries globally And Opens roles like Instrumentation Engineer, Control Technician, and Automation Specialist`,
      extra: `Builds foundation for advanced roles in Industrial IoT and Industry 4.0 systems`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="Process Instrumentation Training"
        description='Transforming manufacturing with PLC, SCADA, robotics and Industry 4.0 integration'
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
            Process Instrumentation deals with measurement and control of parameters like pressure, temperature, flow, and level using sensors and transmitters.
          </p>
          <p className="mb-4 text-red-400">
            <i>Process instrumentation refers to the tools and devices used to measure, monitor, and control physical process variables such as temperature, pressure, flow, level, pH, and humidity in industrial environments.</i>
          </p>
          <p>
           It is a critical part of process automation and control systems.
          </p>
        </div>

        {/* Reused Feature Sections */}
        {featureData.map((item, i) => (
          <IndustryFeatureSection key={i} index={i} {...item} />
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
          <Accordion title="Process Instrumentation FAQs" items={instrumentationItems} />
        </main>
      </div>
    </div>
  );
};

export default Industries;
