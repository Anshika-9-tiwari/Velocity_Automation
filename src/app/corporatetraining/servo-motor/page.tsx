'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { servoItems } from '@/data/faqData';

const Industries = () => {
  const featureData = [
    {
      title: 'Servo Motor Training',
      image: 'https://i.pinimg.com/736x/2a/af/05/2aaf050e9658a0787e2a88f512d8d234.jpg',
      desc: `A servo motor is a rotary actuator that allows for precise control of angular position, speed, and acceleration. It uses feedback mechanisms (typically encoders or resolvers) to maintain accuracy in motion control tasks.`,
      extra: `Builds foundation for motion control, IIoT, and smart manufacturing systems.`,
    },
    {
      title: 'Expert Instruction and Facilities',
      image: '/trainingLab.jpg',
      desc: `Benefit from expert instructors with in-depth knowledge and hands-on experience in servo motor technology at KP Automation. Our trainers are dedicated to imparting practical insights and real-world applications, enhancing your understanding. `,
      extra: `With modern facilities equipped with cutting-edge equipment and software, our conducive learning environment enables students to gain practical experience and develop proficiency in servo motor control, ensuring they are well-prepared for industry demands.`,
    },
    {
      title: 'Projects that Are Relevant to the Industry',
      image: 'https://i.pinimg.com/1200x/1f/42/d4/1f42d427eea8c210df35ea2a6fdea790.jpg',
      desc: `Gain practical experience by working on industry-relevant projects that simulate real-world automation challenges. `,
      extra: `These initiatives offer insightful information about how servo motor technology is applied in diverse industrial sectors.`,
    },
    {
      title: 'Certification',
      image: '/certificate.jpeg',
      desc: `Upon successful completion of the training program, students receive a certification from KP Automation, validating their expertise in servo motor technology. This certification enhances your credibility and employability in the competitive job market. `,
      extra: `At the end of the course, participants will have a comprehensive understanding of all aspects of servo motors, including maintenance and operation. This is one of the features of our servo motor training`,
    },
    {
      title: 'Range of Motion Control Methods',
      image: 'https://i.pinimg.com/736x/c4/89/5c/c4895c12ded5febba208227f073cf1a8.jpg',
      desc: `Our experts guide participants through the analysis of various motion control methods used in industries, such as positional control, speed control, and torque control, with practical examples from applications like packing machines, palletizers, and robots.`,
      extra: `The internal circuitry adjusts the motor’s rotation to match the desired output. This closed-loop system ensures accuracy and real-time correction.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
        <PageBanner
          title="Servo Motor Training"
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
              desc: "Within 6 days"
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
                className="card bg-base-60 p-5 items-center text-center "
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
            Servo Motor training deals with understanding motion control systems used in automation. It includes working with AC/DC motors, stepper motors, and servo drives. Topics include motor selection, wiring, tuning, encoder feedback, and integrating motors with PLCs for precise positioning and speed control in automated machinery.
          </p>
          <p className="mb-4 text-red-400">
           <i> Used in robotics, CNC machines, packaging, and conveyors.Ensures precise control of position, speed, and torque.</i>
          </p>
          <p>
            The servo motor receives a control signal (from a PLC or microcontroller). This closed-loop system ensures accuracy and real-time correction.
          </p>
        </div>

        <h1 className="text-3xl font-semibold text-green-400 text-center mb-10 ">Why is KP Automation !</h1>

        {/* Reused Feature Sections */}
        {featureData.map((item, i) => (
          <IndustryFeatureSection key={i} index={i} {...item} />
        ))}

        {/* Accordion */}
        <main>
          <Accordion title="Servo Motor FAQs" items={servoItems} />
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
