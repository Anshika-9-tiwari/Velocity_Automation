'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { automationItems } from '@/data/faqData';

const Industries = () => {
  const featureData = [
    {
      title: 'Why Industrial Automation Matters',
      image: 'https://i.pinimg.com/736x/01/08/68/01086883bf3541a11e1d28362842d7ee.jpg',
      desc: `Industrial Automation lies at the heart of modern manufacturing and production processes. By integrating advanced technologies such as PLCs (Programmable Logic Controllers), SCADA (Supervisory Control and Data Acquisition) systems, robotics, and IoT (Internet of Things),`,
      extra: `businesses can enhance efficiency, productivity, and safety while reducing costs and time-to-market. In today's highly competitive environment, mastering Industrial Automation is essential for staying ahead & for sustainable growth.`,
    },
    {
      title: 'Our Comprehensive Training Programs',
      image: 'https://i.pinimg.com/1200x/bf/68/09/bf680951e425f057fe05219976cee122.jpg',
      desc: `we offer a comprehensive range of training programs focused on Industrial Automation. From PLC training and programming and SCADA system design to robotics and advanced control systems, our courses cover the full spectrum of automation technologies.`,
      extra: `Led by industry experts with extensive hands-on experience, our training programs combine theoretical knowledge with practical application, ensuring that our students are well-prepared to tackle real-world challenges.`,
    },
    {
      title: 'Cutting-Edge Curriculum',
      image: 'https://i.pinimg.com/736x/88/8d/06/888d06c61395f07191d326e0f36fd3e6.jpg',
      desc: `Our curriculum covers the fundamentals of drives and motors, including the principles of operation, types of drives, motor control techniques, and advanced topics like parameter programming and soft starters. `,
      extra: `With a focus on industry-relevant skills, our program prepares you for real-world challenges in industrial automation.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
        <PageBanner
          title="Industrial Automation Training"
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
          <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Your Gateway to Excellence in Industrial Automation!</h1>
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
                className="card bg-base-50 shadow-sm p-5 items-center text-center "
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
            At KP Automation, we're dedicated to shaping the future of Industrial Automation . This course introduces the basics of automation systems used in modern industries including sensors, actuators, controllers, and integration strategies.
          </p>
          <p className="mb-4 text-red-400">
           <i> Led by industry experts with extensive hands-on experience, our training programs combine theoretical knowledge with practical application,</i>
          </p>
          <p>
            With a relentless commitment to innovation and excellence, we offer training programs designed to equip aspiring engineers and industry professionals with the skills and knowledge needed to thrive in today's dynamic industrial scenario.
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
          <Accordion title="Industrial Automation Training FAQs" items={automationItems} />
        </main>
      </div>
    </div>
  );
};

export default Industries;
