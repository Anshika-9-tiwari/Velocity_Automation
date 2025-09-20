'use client';

import ContactComponent from '@/app/contact/contactcomponent';
import PageBanner from '@/components/pageBanner';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';

const featureData = [
    {
    title: 'Our Office',
    image: '/velocityautomationoffice.jpg',
    desc: `With offices strategically located in India and Singapore, a proven track record of providing offshore design and development would be significant for cost optimization to meet the customer’s business objectives with ease.`,
    extra: `Velocity Automation's objective is to establish itself as a leader in the global automation market by providing high-quality solutions to industries worldwide.`,
  },
  {
    title: 'Our Engineering Teams',
    image: '/Group_Engineer.jpg',
    desc: `At Velocity Automation, our engineering team is the backbone of innovation. With a blend of automation experts, software developers, and industry specialists, we bring years of hands-on experience in delivering smart factory solutions, industrial automation, and control systems.`,
    extra: `Our engineers are passionate problem-solvers, skilled in PLC, SCADA, IoT, robotics, and so on , ensuring every project is designed with precision, efficiency, and reliability.`,
  },
  {
    title: 'Solutions we provide',
    image: '/object-segmentation.jpeg',
    desc: `At Velocity Automation, we deliver end-to-end industrial automation and smart factory solutions tailored to modern manufacturing needs. Our offerings include PLC & SCADA systems, drives & motor control, process instrumentation, industrial networking, and IoT-enabled smart solutions. We offer a SINGLE STOP POINT for all your solution needs.`,
    extra: `KEYSTONE Automation today is recognized for its customer oriented approach, high quality services & rich global experience in diverse industry verticals with leading DCS, PLC, SCADA platforms. We focus on creating intelligent, efficient, and scalable systems that help industries improve productivity, safety, and reliability. From automation training to customized industrial solutions, we empower businesses to embrace Industry 4.0 with confidence.`,
  },
  {
    title: 'Our Expertise',
    image: '/controlsystem.jpg',
    desc: `(1) PLC, SCADA, HMI & DCS based automation, (2) End-to-end factory & process automation, (3) PLC/DCS application logic design, development & testing, (4) IoT-enabled monitoring & control , (5) Remote monitoring & predictive maintenance systems , (6) Siemens, Allen Bradley, Schneider, Mitsubishi platforms, (7) Advanced simulation, testing, and commissioning ,  (8) SCADA/HMI Control Panel installation, commissioning and maintenance, (9) Automotive, Food & Beverages, Manufacturing, Warehouse & Logistics , (10) Annual maintenance contracts (AMC).`,
    extra: `Also, Vision-based system to monitor the usage of personal protective equipment (PPE) in a every factory for worker’s safety and health....`,
  },
  {
    title: 'Specialisation',
    image: '/steelplant.jpg',
    desc: `We are specialized in offering quality solutions, both onshore and offshore with Siemens, Allen-Bradley (Rockwell) and Schneider platforms.`,
    extra: ` Our expertise with WinCC, RS-View, Citect, Wonderware and Cimplicity SCADA systems will assist the customer’s project requirements from initial design to commissioning to production as per global standards.`,
  },
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="About Us"
        description='Transforming manufacturing with us through innovative automation solutions.'
        imageUrl="https://i.pinimg.com/1200x/c7/de/ba/c7debaa6c4f2daa37e97b98629d1fad0.jpg" 
      />

      <div className="px-6 md:px-16 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            VELOCITY Automation LLP was established to meet the demands of industrial Automation requirements in PLC/DCS/MES/SCADA. We offer end to end engineering solutions from project conceptualization; engineering design and development to commissioning service for process industries assisted with onshore & offshore 24X7 service support. 
          </p>
          <p>
           <i>Velocity Automation is a premier provider of industrial automation solutions with over 10 years of experience in delivering innovative engineering services.  Our mission is to provide high-quality, innovative automation solutions that enhance productivity and efficiency in manufacturing processes. We aim to be a trusted partner for our clients, delivering exceptional value through our expertise and commitment to excellence.</i>
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
      </div>
    </div>
  );
};

export default About;
