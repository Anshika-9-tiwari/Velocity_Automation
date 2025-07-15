'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CustomersSection from '@/components/ourcustomers';


const Industries = () => {
  const featureData = [
    {
      title: 'Why Machine Monitoring Matters',
      image: 'https://i.pinimg.com/736x/01/08/68/01086883bf3541a11e1d28362842d7ee.jpg',
      desc: `Machine monitoring is a crucial aspect of industrial automation because it provides real-time visibility into the performance, health, and efficiency of machines across the production line. Here's why it matters:`,
      extra: `Historical Analysis: Machine data enables long-term performance tracking and helps with strategic decisions like when to upgrade or replace equipment.`,
    },
    {
      title: 'Product Feature',
      image: '/Machine-monitoring.png',
      desc: `Avoid Downtime: Monitoring detects early signs of wear, overheating, vibration, or failure so maintenance can be scheduled before breakdowns happen.`,
      extra: `Anywhere Monitoring: With IoT-enabled systems, machines can be monitored remotely, increasing convenience and reducing the need for on-site supervision.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
        <PageBanner
          title="Machine Monitoring"
          description='Maximizing Output, Minimizing Downtime'
          imageUrl="/ai-based.webp" 
        />

      <div className="px-6 md:px-16 py-12 ">
        {/* Overview Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            At its core, our Machine Monitoring Solution is a comprehensive and intelligent system designed to provide real-time insights into the performance of your machines and production lines. It empowers you with valuable data, analytics, and visualization tools that enable data-driven decision-making, proactive maintenance, and continuous process improvement.
          </p>
          <p className="mb-4 text-red-400 italic">
          Real-time monitoring of machine status, cycle times, downtime reasons, and production rates offers unparalleled visibility into the heart of your manufacturing process. This, in turn, helps identify bottlenecks, optimize workflows, and make informed decisions to boost overall efficiency.
          </p>
          <p>
           Our solution can be used for machine monitoring of different types of machines like stamping, blanking, reeling, peeling, welding, and die casting.
          </p>
        </div>

        {/*Chalenges CardSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto px-6 md:px-12 py-16 "
        >
          <h1 className="text-2xl font-semibold text-red-400 text-center mb-10 ">Industries across various sectors face a wide range of challenges. These challenges can vary depending on the industry and its specific circumstances, but some common challenges faced by industries include:!</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5  ">
            {[{
              icon: <CalendarMonthIcon className="text-5xl text-red-400 mb-2" />,
              title: "Real-Time Visibility",
            }, 
            {
              icon: <HistoryToggleOffIcon className="text-5xl text-green-400 mb-2" />,
              title: "Low Productivity",
            }, 
            {
              icon: <CalendarMonthIcon className="text-5xl text-red-400 mb-2" />,
              title: "Inaccurate Decision-Making",
            },
            {
              icon: <AutoStoriesIcon className="text-5xl text-blue-400 mb-2" />,
              title: "High Operational Costs",
            }].map((item, i) => (
              <motion.div
                key={i}
                //whileHover={{ scale: 1.03 }}
                className="card bg-base-50 shadow-sm p-5 items-center text-center "
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

        <div>
          <CustomersSection />
        </div>
      </div>
    </div>
  );
};

export default Industries;
