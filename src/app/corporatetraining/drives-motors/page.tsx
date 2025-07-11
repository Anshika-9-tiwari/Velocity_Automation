'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature'; 
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { drivesItems } from '@/data/faqData';

const Industries = () => {
  const featureData = [
    {
      title: 'Hands-On Learning Experience',
      image: 'https://i.pinimg.com/1200x/2d/ba/05/2dba05bf87129a6df60f7a18d82a1154.jpg',
      desc: `At KP Automation, we believe in learning by doing. Our state-of-the-art laboratories provide hands-on experience with a wide range of drives and motors, allowing you to gain practical skills and confidence in working with industrial automation systems.`,
      extra: `Artificial Intelligence (AI) has transformed automotive processes—enhancing efficiency, product quality, and decision-making.`,
    },
    {
      title: 'Expert Instruction',
      image: '/expertFaculty.jpg',
      desc: `Learn from industry professionals with years of experience in the field of industrial automation. Our instructors are dedicated to providing personalized guidance and mentorship, ensuring that you receive the highest quality education and support.`,
      extra: `This approach lets manufacturers schedule maintenance only when needed—avoiding unnecessary downtime and expense.`,
    },
    {
      title: 'Real World Projects',
      image: 'https://i.pinimg.com/1200x/d2/ee/e4/d2eee4269e37a40889b122ebf3611c87.jpg',
      desc: `Put your knowledge into practice with industry-relevant projects that will help you in working in real-world scenarios. Our platform gives real-time insights into consumption and usage patterns.`,
      extra: `Our hands-on approach allows you to apply your skills in a practical setting and prepares you for success in your future career.`,
    },
    {
      title: 'Certification and Placement Assistance',
      image: '/certificate.jpeg',
      desc: `Upon successful completion of the program, you'll receive a certification from KP Automation, recognized by industry leaders. Additionally, our dedicated placement assistance services help connect you with job opportunities in leading automation companies, ensuring that you're well-prepared for a rewarding career in industrial automation.`,
      extra: `Manufacturers benefit from accuracy, compliance, and enhanced production processes.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="Drives & Motors Training"
        description='Transforming manufacturing with Drives and Motors integration'
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
      />

     {/* want to make this part reusable */}
      <div className="px-6 md:px-16 py-12 ">
        {/* CardSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto px-6 md:px-12 py-16 "
        >
          <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Your Gateway to Mastering Drives and Motors in Industrial Automation!</h1>
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
                className="card bg-base-50 inset-shadow-sm p-5 items-center text-center "
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
          <h1 className="text-3xl font-semibold mb-4">Overview</h1>
          <p className="mb-3">
           At KP Automation, we understand the important role that Drives and Motors play in the realm of industrial automation. Our comprehensive training program is specially designed to equip individuals with the knowledge, skills, and practical experience they require to excel in this dynamic field.
          </p>
          <p className="mb-3 text-md text-red-400 ">
            <i>Join us to learn Drives and Motors training program and unlock your potential in industrial automation. </i>
          </p>
          <p>
            Whether you're a recent graduate or an experienced professional, our program provides the tools and resources you need to succeed in this fast-paced industry.
          </p>
        </div>
        <h1 className="text-3xl font-semibold text-green-600 text-center mb-10 mt-15">Why Choose KP Automation for Drives and Motors Training?!</h1>

        {/* Feature Sections */}
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
          <Accordion title="Course Content FAQs" items={drivesItems} />
        </main>
      </div>
    </div>
  );
};

export default Industries;
